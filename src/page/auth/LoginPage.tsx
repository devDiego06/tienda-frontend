import React, { useState, useEffect, useCallback, useRef } from 'react'
import { getPasswordStrength, launchParticles } from './auth.utils'
import s from './auth.module.css'
import { Logo, PhoneIcon } from './auth.components'
import { EyeIcon } from './auth.components'
import { ArrowRightIcon } from './auth.components'
import { ArrowLeftIcon } from './auth.components'
import { MailIcon } from './auth.components'
import { LockIcon } from './auth.components'
import { AlertIcon } from './auth.components'
import { CheckIcon } from './auth.components'
import { GradientBackground } from './auth.components'
import { router } from '../../router'
import { Navigate, useNavigate } from 'react-router-dom'

type LoginStep = 'phone' | 'password'

interface LoginFormData {
  identifier: string
  password: string
}

export default function LoginPage() {
  const [step, setStep] = useState<LoginStep>('phone')
  const [form, setForm] = useState<LoginFormData>({ identifier: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const passwordRef = useRef<HTMLInputElement>(null)
  const strength = getPasswordStrength(form.password)

  /* ── focus password on step change ── */
  useEffect(() => {
    if (step === 'password') {
      setTimeout(() => passwordRef.current?.focus(), 100)
    }
  }, [step])

  /* ── enter key handler ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return
      if (step === 'phone') handleContinue()
      else if (step === 'password') handleLogin()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  const isPhoneValid = useCallback(() => {
    const v = form.identifier.trim()
    return /^3\d{9}$/.test(v) || v.length > 4
  }, [form.identifier])

  function handleContinue() {
    if (!isPhoneValid()) { setPhoneError(true); return }
    setPhoneError(false)
    setStep('password')
  }

  function handleLogin() {
    if (form.password.length < 6) { setPasswordError(true); return }
    setPasswordError(false)
    setLoading(true)
    // TODO: replace with real API call
    // authApi.login({ identifier: form.identifier, password: form.password })

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      launchParticles()

    }, 1400)

    setTimeout(() => navigate("/register"), 3000)
  }

  function handleBack() {
    setStep('phone')
    setForm(f => ({ ...f, password: '' }))
    setPasswordError(false)
  }

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
          ¿No tienes cuenta?{' '}
          <a href="/register">Regístrate</a>
        </div>
      </nav>

      {/* ── PAGE ── */}
      <div className={s.tbPage}>
        <div className={s.tbCard} style={{ maxWidth: 380, padding: '40px 36px' }}>

          {success ? (
            /* ── SUCCESS ── */
            <div className={s.tbSuccess}>
              <div className={s.tbSuccessIcon}>
                <CheckIcon />
              </div>
              <div className={s.tbSuccessTitle}>¡Bienvenido! 👋</div>
              <div className={s.tbSuccessSub}>Sesión iniciada correctamente</div>
            </div>
          ) : (
            <>
              {/* BADGE */}
              <div className={s.tbBadge}>
                <span className={s.tbBadgeDot} />
                Panel de Login
              </div>

              {/* PROGRESS DOTS */}
              <div className={s.tbDots}>
                <div className={`${s.tbDot} ${step === 'phone' ? s.tbDotOn : ''}`} />
                <div className={`${s.tbDot} ${step === 'password' ? s.tbDotOn : ''}`} />
              </div>

              {/* ── STEP: PHONE ── */}
              {step === 'phone' && (
                <div className={s.tbStepEnter} key="email">
                  <div className={s.tbTitle}>
                    Iniciar<br /><span>sesión</span>
                  </div>
                  <div className={s.tbSub}>
                    Ingresa tu número para continuar.
                  </div>

                  {phoneError && (
                    <div className={s.tbError}>
                      <AlertIcon />
                      Ingresa un teléfono válido.
                    </div>
                  )}

                  <div className={s.tbInputGroup}>
                    <label className={s.tbInputLabel}>Teléfono</label>
                    <div className={s.tbInputWrap}>
                      <span className={s.tbInputIcon}><MailIcon /></span>
                      <input
                        className={s.tbField}
                        type="text"
                        placeholder="3001234567"
                        value={form.identifier}
                        onChange={e => setForm(f => ({ ...f, identifier: e.target.value }))}
                      />
                    </div>
                  </div>

                  <button className={s.tbBtnPrimary} onClick={handleContinue}>
                    Continuar <ArrowRightIcon />
                  </button>
                </div>
              )}

              {/* ── STEP: PASSWORD ── */}
              {step === 'password' && (
                <div className={s.tbStepEnter} key="password">
                  <div className={s.tbTitle}>
                    Tu<br /><span>contraseña</span>
                  </div>
                  <div className={s.tbSub}>
                    Ingresa tu contraseña para acceder al panel.
                  </div>

                  {/* Telefono recap chip */}
                  <div className={s.tbChip}>
                    <span className={s.tbChipIcon}><PhoneIcon /></span>
                    <div>
                      <span className={s.tbChipLabel}>Telefono</span>
                      <span className={s.tbChipVal}>{form.identifier}</span>
                    </div>
                    <button className={s.tbChipChange} onClick={handleBack}>
                      Cambiar
                    </button>
                  </div>

                  {passwordError && (
                    <div className={s.tbError}>
                      <AlertIcon />
                      Contraseña incorrecta. Inténtalo de nuevo.
                    </div>
                  )}

                  <div className={s.tbInputGroup}>
                    <label className={s.tbInputLabel}>Contraseña</label>
                    <div className={s.tbInputWrap}>
                      <span className={s.tbInputIcon}><LockIcon /></span>
                      <input
                        ref={passwordRef}
                        className={`${s.tbField} ${s.tbFieldRight}`}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Mínimo 6 caracteres"
                        value={form.password}
                        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                        autoComplete="current-password"
                      />
                      <button
                        className={s.tbEyeBtn}
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        aria-label="Mostrar contraseña"
                      >
                        <EyeIcon show={showPassword} />
                      </button>
                    </div>

                    {/* Strength bar */}
                    {strength && (
                      <>
                        <div className={s.tbStrengthBar}>
                          <div
                            className={s.tbStrengthFill}
                            style={{ width: strength.width, background: strength.color }}
                          />
                        </div>
                        <div className={s.tbStrengthLabel} style={{ color: strength.color }}>
                          {strength.label}
                        </div>
                      </>
                    )}
                  </div>

                  <button
                    className={s.tbBtnPrimary}
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className={s.tbSpinner} />
                    ) : (
                      <>Iniciar sesión <ArrowRightIcon /></>
                    )}
                  </button>

                  <div style={{ textAlign: 'right', marginTop: 10 }}>
                    <a
                      href="#"
                      style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}
                      onMouseOver={e => (e.currentTarget.style.color = '#c8f135')}
                      onMouseOut={e => (e.currentTarget.style.color = '#666')}
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  <button className={s.tbBtnBack} onClick={handleBack}>
                    <ArrowLeftIcon /> Volver
                  </button>
                </div>
              )}
            </>
          )}

          {/* FOOTER */}
          <div className={s.tbFooter}>
            Al continuar aceptas los{' '}
            <a href="#">Términos de servicio</a> y la{' '}
            <a href="#">Política de privacidad</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
