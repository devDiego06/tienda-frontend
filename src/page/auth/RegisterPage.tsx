import { useState, useEffect, useRef, Fragment } from 'react'
import s from './auth.module.css'
import {
  GradientBackground, Logo, EyeIcon, ArrowRightIcon,
  ArrowLeftIcon, LockIcon, PhoneIcon, PersonIcon, PinIcon, ShieldIcon,
  AlertIcon, CheckIcon
} from './auth.components'
import { getPasswordStrength, launchParticles } from './auth.utils'
import { authApi } from '../../api/auth'

type Role = 'CUSTOMER' | 'ADMIN'

type Step = 1 | 2 | 3

interface RegisterForm {
  phone: string
  password: string
  confirmPassword: string
  name: string
  address: string
  role: Role
}

/* ── STEPPER ── */
function Stepper({ current }: { current: Step }) {
  const steps = [
    { n: 1, label: 'Acceso' },
    { n: 2, label: 'Contraseña' },
    { n: 3, label: 'Tu perfil' },
  ]
  return (
    <div className={s.tbStepper}>
      {steps.map((st, i) => {
        const done = current > st.n
        const active = current === st.n
        return (
          <Fragment key={st.n}>
            <div className={s.tbStepNode}>
              <div className={`${s.tbStepCircle} ${done ? s.tbStepCircleDone : ''} ${active ? s.tbStepCircleActive : ''}`}>
                {done ? <CheckIcon /> : st.n}
              </div>
              <div className={`${s.tbStepLabel} ${done ? s.tbStepLabelDone : ''} ${active ? s.tbStepLabelActive : ''}`}>
                {st.label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={`${s.tbStepLine} ${current > st.n ? s.tbStepLineDone : ''}`} />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

/* ── MAIN COMPONENT ── */
export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<RegisterForm>({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    role: 'CUSTOMER',
  })

  const [showPw1, setShowPw1] = useState(false)
  const [showPw2, setShowPw2] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const pw1Ref = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const strength = getPasswordStrength(form.password)
  const passwordsMatch = form.confirmPassword.length > 0 && form.password === form.confirmPassword

  /* ── auto-focus on step change ── */
  useEffect(() => {
    if (step === 2) setTimeout(() => pw1Ref.current?.focus(), 100)
    if (step === 3) setTimeout(() => nameRef.current?.focus(), 100)
  }, [step])

  /* ── enter key ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return
      if (step === 1) handleStep1()
      else if (step === 2) handleStep2()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  const set = (field: keyof RegisterForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  /* ── STEP 1 validation ── */
  function handleStep1() {
    const phoneOk = /^3\d{9}$/.test(form.phone)
    if (!phoneOk) {
      setError('Ingresa un celular de 10 dígitos.')
      return
    }
    setError('')
    setStep(2)
  }

  /* ── STEP 2 validation ── */
  function handleStep2() {
    if (form.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }
    setError('')
    setStep(3)
  }

  /* ── STEP 3 / final submit ── */
  async function handleSubmit() {
    if (!form.name.trim()) {
      setError('Por favor ingresa tu nombre.')
      return
    }

    //sacar del form lo que no se necesita para enviar al backend
    const { confirmPassword, role, ...body } = form

    setLoading(true)
    try {
      const response = await authApi.register(body)
      console.log(response);

      if (response && response.token) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response))
        window.location.href = '/'
      } else {
        setError('Error al registrar usuario')
      }
      setTimeout(() => {
        setLoading(false)
        setSuccess(true)
        launchParticles()
      }, 1600)
    } catch (err: any) {
      setLoading(false)
      console.error(err)
      const msg = err.response?.data?.message || err.message || 'Error al registrar usuario'
      setError(msg)
    }
  }

  function goBack() {
    setError('')
    setStep(s => (s > 1 ? ((s - 1) as Step) : s))
  }

  const identifier = form.phone

  console.log(form);


  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0a0a0a', overflow: 'hidden' }}>
      <GradientBackground />

      {/* ── TOPBAR ── */}
      <nav className={s.tbTopbar}>
        <a href="/" className={s.tbLogo}>
          <Logo />
          Tienda Barrio
        </a>
        <div className={s.tbTopbarRight}>
          ¿Ya tienes cuenta? <a href="/">Inicia sesión</a>
        </div>
      </nav>

      {/* ── PAGE ── */}
      <div className={s.tbPage}>
        <div
          className={s.tbCard}
          style={{ maxWidth: 400, padding: 36, maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
        >
          {success ? (
            /* ── SUCCESS ── */
            <div className={s.tbSuccess}>
              <div className={s.tbSuccessIcon}><CheckIcon /></div>
              <div className={s.tbSuccessTitle}>¡Cuenta creada! 🎉</div>
              <div className={s.tbSuccessSub}>
                <strong style={{ color: '#c8f135' }}>
                  {form.name}
                </strong>
                , tu cuenta fue registrada exitosamente.
                <br />Ya puedes realizar tu primer pedido.
              </div>
              <div className={s.tbJwtTag}>
                <div className={s.tbJwtDot} />
                JWT generado · 24h · POST /api/auth/register
              </div>
              <button
                className={s.tbBtnPrimary}
                style={{ marginTop: 20, width: 'auto', padding: '12px 28px' }}
                onClick={() => (window.location.href = '/login')}
              >
                Iniciar Sesión <ArrowRightIcon />
              </button>
            </div>
          ) : (
            <>
              {/* BADGE */}
              <div className={s.tbBadge}>
                <span className={s.tbBadgeDot} />
                Crear cuenta nueva
              </div>

              {/* STEPPER */}
              <Stepper current={step} />

              {/* ERROR */}
              {error && (
                <div className={s.tbError}>
                  <AlertIcon /> {error}
                </div>
              )}

              {/* ══════════════════════════════════════
                  STEP 1 — ACCESO
              ══════════════════════════════════════ */}
              {step === 1 && (
                <div className={s.tbStepEnter} key="step1">
                  <div className={s.tbTitle}>
                    Crea tu<br /><span>cuenta</span>
                  </div>
                  <div className={s.tbSub}>
                    Empieza con tu número de celular.
                  </div>

                  {/* Phone */}
                  <div className={s.tbInputGroup}>
                    <label className={s.tbInputLabel}>Número de celular</label>
                    <div className={s.tbInputWrap}>
                      <span className={s.tbInputIcon}><PhoneIcon /></span>
                      <input
                        className={s.tbField}
                        type="tel"
                        placeholder="3001234567"
                        value={form.phone}
                        onChange={set('phone')}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Role selector */}
                  <div style={{ marginBottom: 6 }}>
                    <label className={s.tbInputLabel}>Tipo de cuenta</label>
                    <div className={s.tbRoleGrid}>
                      {([
                        { role: 'CUSTOMER' as Role, emoji: '🛍️', name: 'Cliente', desc: 'Realiza pedidos y haz seguimiento en tiempo real' },
                      ]).map(r => (
                        <div
                          key={r.role}
                          className={`${s.tbRoleCard} ${form.role === r.role ? s.tbRoleCardSelected : ''}`}
                          onClick={() => setForm(f => ({ ...f, role: r.role }))}
                        >
                          <div className={s.tbRoleIcon}>{r.emoji}</div>
                          <div className={`${s.tbRoleName} ${form.role === r.role ? s.tbRoleNameSelected : ''}`}>
                            {r.name}
                          </div>
                          <div className={s.tbRoleDesc}>{r.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={s.tbBtnPrimary} onClick={handleStep1}>
                    Continuar <ArrowRightIcon />
                  </button>
                </div>
              )}

              {/* ══════════════════════════════════════
                  STEP 2 — CONTRASEÑA
              ══════════════════════════════════════ */}
              {step === 2 && (
                <div className={s.tbStepEnter} key="step2">
                  <div className={s.tbTitle}>
                    Crea tu<br /><span>contraseña</span>
                  </div>
                  <div className={s.tbSub}>
                    Mínimo 6 caracteres. Más segura, mejor.
                  </div>

                  {/* Telefono chip recap */}
                  <div className={s.tbChip}>
                    <span className={s.tbChipIcon}><PhoneIcon /></span>
                    <div>
                      <span className={s.tbChipLabel}>Telefono</span>
                      <span className={s.tbChipVal}>{identifier}</span>
                    </div>
                    <button className={s.tbChipChange} onClick={() => setStep(1)}>
                      Cambiar
                    </button>
                  </div>

                  {/* Password 1 */}
                  <div className={s.tbInputGroup}>
                    <label className={s.tbInputLabel}>Contraseña</label>
                    <div className={s.tbInputWrap}>
                      <span className={s.tbInputIcon}><LockIcon /></span>
                      <input
                        ref={pw1Ref}
                        className={`${s.tbField} ${s.tbFieldRight}`}
                        type={showPw1 ? 'text' : 'password'}
                        placeholder="Mínimo 6 caracteres"
                        value={form.password}
                        onChange={set('password')}
                        autoComplete="new-password"
                      />
                      <button className={s.tbEyeBtn} type="button" onClick={() => setShowPw1(v => !v)}>
                        <EyeIcon show={showPw1} />
                      </button>
                    </div>
                    {strength && (
                      <>
                        <div className={s.tbStrengthBar}>
                          <div className={s.tbStrengthFill} style={{ width: strength.width, background: strength.color }} />
                        </div>
                        <div className={s.tbStrengthLabel} style={{ color: strength.color }}>{strength.label}</div>
                      </>
                    )}
                  </div>

                  {/* Password 2 */}
                  <div className={s.tbInputGroup}>
                    <label className={s.tbInputLabel}>Confirmar contraseña</label>
                    <div className={s.tbInputWrap}>
                      <span className={s.tbInputIcon}><ShieldIcon /></span>
                      <input
                        className={`${s.tbField} ${s.tbFieldRight}`}
                        type={showPw2 ? 'text' : 'password'}
                        placeholder="Repite tu contraseña"
                        value={form.confirmPassword}
                        onChange={set('confirmPassword')}
                        autoComplete="new-password"
                      />
                      <button className={s.tbEyeBtn} type="button" onClick={() => setShowPw2(v => !v)}>
                        <EyeIcon show={showPw2} />
                      </button>
                    </div>
                    {/* Match indicator */}
                    {form.confirmPassword.length > 0 && (
                      <div className={s.tbMatchRow} style={{ color: passwordsMatch ? '#c8f135' : '#ff4d4d' }}>
                        {passwordsMatch ? (
                          <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><polyline points="20 6 9 17 4 12" /></svg>
                            Las contraseñas coinciden
                          </>
                        ) : (
                          <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            No coinciden aún
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <button className={s.tbBtnPrimary} onClick={handleStep2}>
                    Continuar <ArrowRightIcon />
                  </button>
                  <button className={s.tbBtnBack} onClick={goBack}>
                    <ArrowLeftIcon /> Volver
                  </button>
                </div>
              )}

              {/* ══════════════════════════════════════
                  STEP 3 — PERFIL
              ══════════════════════════════════════ */}
              {step === 3 && (
                <div className={s.tbStepEnter} key="step3">
                  <div className={s.tbTitle}>
                    Tu<br /><span>perfil</span>
                  </div>
                  <div className={s.tbSub}>
                    Cuéntanos un poco más sobre ti.
                  </div>

                  {/* Summary chip */}
                  <div className={s.tbChip}>
                    <span className={s.tbChipIcon}><PhoneIcon /></span>
                    <div>
                      <span className={s.tbChipLabel}>Cuenta</span>
                      <span className={s.tbChipVal}>{identifier}</span>
                    </div>
                    <span style={{
                      marginLeft: 'auto', fontSize: 10, fontWeight: 700,
                      padding: '2px 8px',
                      background: 'rgba(200,241,53,0.08)',
                      border: '1px solid rgba(200,241,53,0.2)',
                      borderRadius: 8, color: '#c8f135',
                    }}>
                      {form.role === 'CUSTOMER' ? 'CLIENTE' : 'TENDERO'}
                    </span>
                  </div>

                  {/* Name */}
                  <div className={s.tbTwoCol}>
                    <div className={s.tbInputGroup}>
                      <label className={s.tbInputLabel}>Nombre</label>
                      <div className={s.tbInputWrap}>
                        <span className={s.tbInputIcon}><PersonIcon /></span>
                        <input
                          ref={nameRef}
                          className={s.tbField}
                          type="text"
                          placeholder="Tu nombre"
                          value={form.name}
                          onChange={set('name')}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Address */}
                  <div className={s.tbInputGroup}>
                    <label className={s.tbInputLabel}>Dirección de entrega</label>
                    <div className={s.tbInputWrap}>
                      <span className={s.tbInputIcon}><PinIcon /></span>
                      <input
                        className={s.tbField}
                        type="text"
                        placeholder="Cra 50 #80-12, Barranquilla"
                        value={form.address}
                        onChange={set('address')}
                      />
                    </div>
                  </div>


                  {/* Terms */}
                  {/* <div
                    className={s.tbTermsRow}
                    onClick={() => setForm(f => ({ ...f, termsAccepted: !f.termsAccepted }))}
                  >
                    <div className={`${s.tbCheckbox} ${form.termsAccepted ? s.tbCheckboxChecked : ''}`}>
                      {form.termsAccepted && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="10" height="10" style={{ color: '#0a0a0a' }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div className={s.tbTermsText}>
                      Acepto los{' '}
                      <a href="#" onClick={e => e.stopPropagation()}>Términos de servicio</a>
                      {' '}y la{' '}
                      <a href="#" onClick={e => e.stopPropagation()}>Política de privacidad</a>
                      {' '}de Tienda Barrio
                    </div>
                  </div> */}

                  <button className={s.tbBtnPrimary} onClick={handleSubmit} disabled={loading}>
                    {loading ? <div className={s.tbSpinner} /> : <>Crear mi cuenta <ArrowRightIcon /></>}
                  </button>
                  <button className={s.tbBtnBack} onClick={goBack}>
                    <ArrowLeftIcon /> Volver
                  </button>
                </div>
              )}
            </>
          )}

          {/* FOOTER */}
          <div className={s.tbFooter}>
            ¿Ya tienes cuenta? <a href="/">Inicia sesión</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
