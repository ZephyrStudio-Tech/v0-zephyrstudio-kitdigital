'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, CheckCircle2, Phone, Mail, MessageCircle, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface FormData {
  entity: string
  size: string
  name: string
  phone: string
  email: string
  prov: string
  companyName: string
  nif: string
  service: string
  hw_pref: string
  web_state: string
  sla: string
  rgpd: boolean
}

export function TriageWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    entity: '',
    size: '',
    name: '',
    phone: '',
    email: '',
    prov: '',
    companyName: '',
    nif: '',
    service: '',
    hw_pref: '',
    web_state: '',
    sla: '',
    rgpd: false,
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const submitForm = async () => {
    setIsSubmitting(true)
    const { error } = await supabase.from('triage_leads').insert([
      {
        entity_type: formData.entity,
        company_size: formData.size,
        full_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        province: formData.prov,
        company_name: formData.entity === 'pyme' ? formData.companyName : null,
        nif: formData.entity === 'pyme' ? formData.nif : null,
        service_requested: formData.service,
        hardware_pref: formData.hw_pref || null,
        web_state: formData.web_state || null,
        sla_urgency: formData.sla,
        rgpd_accepted: formData.rgpd,
        status: 'pending',
      },
    ])
    if (error) {
      console.error('Supabase insert error:', error)
      alert('Ha ocurrido un error al enviar tu solicitud. Por favor, inténtalo de nuevo.')
    } else {
      setCurrentStep(6)
    }
    setIsSubmitting(false)
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))
  const goToKilled = () => setCurrentStep(-1)
  const reset = () => {
    setCurrentStep(0)
    setFormData({
      entity: '',
      size: '',
      name: '',
      phone: '',
      email: '',
      prov: '',
      companyName: '',
      nif: '',
      service: '',
      hw_pref: '',
      web_state: '',
      sla: '',
      rgpd: false,
    })
  }

  // Reusable Option Card Component
  const OptionCard = ({ 
    emoji, 
    title, 
    subtitle, 
    onClick, 
    selected = false,
    variant = 'default'
  }: { 
    emoji: string
    title: string
    subtitle?: string
    onClick: () => void
    selected?: boolean
    variant?: 'default' | 'premium'
  }) => (
    <button
      onClick={onClick}
      className={`
        group relative w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left
        ${selected 
          ? 'bg-[#00e5ff]/10 border-[#00e5ff] shadow-[0_0_30px_rgba(0,229,255,0.3)]' 
          : variant === 'premium'
          ? 'bg-gradient-to-br from-[#00e5ff]/5 to-[#0018d8]/5 border-[#00e5ff]/30 hover:border-[#00e5ff]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]'
          : 'bg-white/[0.02] border-white/10 hover:border-[#00e5ff]/50 hover:bg-white/[0.05]'
        }
      `}
    >
      {variant === 'premium' && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Premium
        </div>
      )}
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
    </button>
  )

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="w-full max-w-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Progress Bar & Step Indicator */}
        {currentStep >= 0 && currentStep <= totalSteps && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                PASO {currentStep + 1} DE {totalSteps + 1}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00e5ff] to-[#0018d8]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step -1: Killed (Disqualified) */}
          {currentStep === -1 && (
            <motion.div
              key="killed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-12"
            >
              <div className="text-8xl mb-6">🚫</div>
              <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                Acceso Denegado
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
                Lo sentimos, el Kit Digital está exclusivamente diseñado para autónomos y empresas registradas en España. 
                Debes tener una figura legal activa (autónomo o sociedad) para poder acceder a la subvención.
              </p>
              <button
                onClick={reset}
                className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Volver al inicio
              </button>
            </motion.div>
          )}

          {/* Step 0: Entity Filter */}
          {currentStep === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                ¿Cuál es tu situación legal?
              </h2>
              <p className="text-slate-400 mb-8">
                Necesitamos verificar tu elegibilidad para el Kit Digital
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <OptionCard
                  emoji="👤"
                  title="Soy Autónomo"
                  onClick={() => {
                    updateField('entity', 'autonomo')
                    nextStep()
                  }}
                  selected={formData.entity === 'autonomo'}
                />
                <OptionCard
                  emoji="🏢"
                  title="Soy PYME"
                  subtitle="Sociedad mercantil"
                  onClick={() => {
                    updateField('entity', 'pyme')
                    nextStep()
                  }}
                  selected={formData.entity === 'pyme'}
                />
                <OptionCard
                  emoji="❌"
                  title="No soy autónomo ni empresa"
                  onClick={goToKilled}
                />
              </div>
            </motion.div>
          )}

          {/* Step 1: Size */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                ¿Cuántos empleados tienes?
              </h2>
              <p className="text-slate-400 mb-8">
                Esto determina tu segmento y el importe máximo de subvención
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <OptionCard
                  emoji="👨‍💼"
                  title="0 - 2 empleados"
                  subtitle="Segmento III · Hasta 3.000€"
                  onClick={() => {
                    updateField('size', '0-2')
                    nextStep()
                  }}
                  selected={formData.size === '0-2'}
                />
                <OptionCard
                  emoji="👥"
                  title="3 - 9 empleados"
                  subtitle="Segmento II · Hasta 6.000€"
                  onClick={() => {
                    updateField('size', '3-9')
                    nextStep()
                  }}
                  selected={formData.size === '3-9'}
                />
                <OptionCard
                  emoji="👨‍👩‍👧‍👦"
                  title="10 o más empleados"
                  subtitle="Segmento I · Hasta 12.000€"
                  onClick={() => {
                    updateField('size', '10+')
                    nextStep()
                  }}
                  selected={formData.size === '10+'}
                />
              </div>
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Atrás
              </button>
            </motion.div>
          )}

          {/* Step 2: Contact Data */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Tus datos de contacto
              </h2>
              <p className="text-slate-400 mb-8">
                Para poder enviarte la propuesta personalizada
              </p>
              
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Nombre Completo *"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono (WhatsApp) *"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Provincia *"
                  value={formData.prov}
                  onChange={(e) => updateField('prov', e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
                />
              </div>

              {/* Dynamic PYME Fields */}
              {formData.entity === 'pyme' && (
                <div className="bg-[#00e5ff]/5 border border-[#00e5ff]/20 p-6 rounded-2xl mb-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                    <span className="text-[#00e5ff] font-mono text-xs uppercase tracking-widest">
                      Datos de la Empresa
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Nombre Fiscal (Empresa) *"
                    value={formData.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    className="w-full bg-black/30 border border-[#00e5ff]/30 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="NIF / CIF *"
                    value={formData.nif}
                    onChange={(e) => updateField('nif', e.target.value)}
                    className="w-full bg-black/30 border border-[#00e5ff]/30 rounded-xl p-4 text-white placeholder:text-slate-500 focus:border-[#00e5ff] focus:outline-none transition-colors"
                  />
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/[0.06] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Atrás
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.name || !formData.phone || !formData.email || !formData.prov || (formData.entity === 'pyme' && (!formData.companyName || !formData.nif))}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] rounded-xl text-white font-semibold hover:shadow-[0_10px_30px_rgba(0,229,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Dynamic Services */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                ¿Qué necesitas desplegar?
              </h2>
              <p className="text-slate-400 mb-8">
                Selecciona el servicio principal que quieres contratar
              </p>
              
              {formData.size === '0-2' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <OptionCard emoji="🌐" title="Web" onClick={() => { updateField('service', 'Web'); nextStep() }} selected={formData.service === 'Web'} />
                  <OptionCard emoji="💻" title="Web + Equipo" onClick={() => { updateField('service', 'Web + Equipo'); nextStep() }} selected={formData.service === 'Web + Equipo'} />
                  <OptionCard emoji="🧾" title="Factura" onClick={() => { updateField('service', 'Factura'); nextStep() }} selected={formData.service === 'Factura'} />
                  <OptionCard emoji="💻" title="Factura + Equipo" onClick={() => { updateField('service', 'Factura + Equipo'); nextStep() }} selected={formData.service === 'Factura + Equipo'} />
                  <OptionCard emoji="🛒" title="Ecommerce" onClick={() => { updateField('service', 'Ecommerce'); nextStep() }} selected={formData.service === 'Ecommerce'} />
                  <OptionCard emoji="💻" title="Ecom + Equipo" onClick={() => { updateField('service', 'Ecom + Equipo'); nextStep() }} selected={formData.service === 'Ecom + Equipo'} />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <OptionCard emoji="🌐" title="Web Corporativa" onClick={() => { updateField('service', 'Web Corporativa'); nextStep() }} selected={formData.service === 'Web Corporativa'} />
                  <OptionCard emoji="🛒" title="Ecommerce Avanzado" onClick={() => { updateField('service', 'Ecommerce Avanzado'); nextStep() }} selected={formData.service === 'Ecommerce Avanzado'} />
                  <OptionCard emoji="🧾" title="Factura Electrónica" onClick={() => { updateField('service', 'Factura Electrónica'); nextStep() }} selected={formData.service === 'Factura Electrónica'} />
                  <OptionCard emoji="⚙️" title="CRM y Procesos" onClick={() => { updateField('service', 'CRM y Procesos'); nextStep() }} selected={formData.service === 'CRM y Procesos'} />
                </div>
              )}
              
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Atrás
              </button>
            </motion.div>
          )}

          {/* Step 4: Audit & SLAs */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Afinando Detalles
              </h2>
              <p className="text-slate-400 mb-8">
                Personaliza tu experiencia de implementación
              </p>

              <div className="space-y-6 mb-6">
                {/* Hardware Block */}
                {formData.service.includes('Equipo') && (
                  <div>
                    <h3 className="text-white font-semibold mb-3">Ecosistema Preferido</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <OptionCard 
                        emoji="🍏" 
                        title="Apple Mac" 
                        onClick={() => updateField('hw_pref', 'Apple')} 
                        selected={formData.hw_pref === 'Apple'} 
                      />
                      <OptionCard 
                        emoji="🪟" 
                        title="Windows" 
                        onClick={() => updateField('hw_pref', 'Windows')} 
                        selected={formData.hw_pref === 'Windows'} 
                      />
                    </div>
                  </div>
                )}

                {/* Web State Block */}
                {(formData.service.includes('Web') || formData.service.includes('Ecom')) && (
                  <div>
                    <h3 className="text-white font-semibold mb-3">Estado de tu plataforma</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <OptionCard 
                        emoji="✨" 
                        title="Crear desde cero" 
                        onClick={() => updateField('web_state', 'Nuevo')} 
                        selected={formData.web_state === 'Nuevo'} 
                      />
                      <OptionCard 
                        emoji="🔧" 
                        title="Mejorar existente" 
                        onClick={() => updateField('web_state', 'Mejorar')} 
                        selected={formData.web_state === 'Mejorar'} 
                      />
                    </div>
                  </div>
                )}

                {/* SLA Block */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Velocidad de Gestión Deseada</h3>
                  <div className="space-y-3">
                    <OptionCard 
                      emoji="📞" 
                      title="Llamada Telefónica" 
                      subtitle="Respuesta en 24-72h"
                      onClick={() => updateField('sla', 'Llamada')} 
                      selected={formData.sla === 'Llamada'} 
                    />
                    <OptionCard 
                      emoji="✉️" 
                      title="Gestión por Email" 
                      subtitle="Respuesta en 24-48h"
                      onClick={() => updateField('sla', 'Email')} 
                      selected={formData.sla === 'Email'} 
                    />
                    <OptionCard 
                      emoji="⚡" 
                      title="Quiero todo gestionado HOY" 
                      subtitle="Proceso automatizado premium"
                      onClick={() => updateField('sla', 'Premium')} 
                      selected={formData.sla === 'Premium'}
                      variant="premium"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/[0.06] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Atrás
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.sla}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] rounded-xl text-white font-semibold hover:shadow-[0_10px_30px_rgba(0,229,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 5: Summary & Submit */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Resumen del Expediente
              </h2>
              <p className="text-slate-400 mb-8">
                Revisa tu información antes de enviar
              </p>

              <div className="bg-black/40 border border-white/5 p-6 rounded-2xl mb-6 space-y-3 font-mono text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Tipo:</span>
                  <span className="text-white font-semibold">{formData.entity === 'autonomo' ? 'Autónomo' : 'PYME'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Segmento:</span>
                  <span className="text-white font-semibold">{formData.size} empleados</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Nombre:</span>
                  <span className="text-white font-semibold">{formData.name}</span>
                </div>
                {formData.entity === 'pyme' && (
                  <>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500">Empresa:</span>
                      <span className="text-white font-semibold">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-500">NIF:</span>
                      <span className="text-white font-semibold">{formData.nif}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Teléfono:</span>
                  <span className="text-white font-semibold">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Email:</span>
                  <span className="text-white font-semibold">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Provincia:</span>
                  <span className="text-white font-semibold">{formData.prov}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Servicio:</span>
                  <span className="text-white font-semibold">{formData.service}</span>
                </div>
                {formData.hw_pref && (
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500">Hardware:</span>
                    <span className="text-white font-semibold">{formData.hw_pref}</span>
                  </div>
                )}
                {formData.web_state && (
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500">Web:</span>
                    <span className="text-white font-semibold">{formData.web_state}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">SLA:</span>
                  <span className="text-[#00e5ff] font-semibold">{formData.sla}</span>
                </div>
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.rgpd}
                  onChange={(e) => updateField('rgpd', e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-white/20 bg-black/30 text-[#00e5ff] focus:ring-[#00e5ff] focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  Acepto la política de privacidad y el tratamiento de mis datos personales conforme al RGPD. 
                  Mis datos serán utilizados exclusivamente para gestionar esta solicitud del Kit Digital.
                </span>
              </label>

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white hover:bg-white/[0.06] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Atrás
                </button>
                <button
                  onClick={submitForm}
                  disabled={!formData.rgpd || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0018d8] rounded-xl text-white font-bold text-lg hover:shadow-[0_20px_40px_rgba(0,229,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Conectando con Red.es...
                    </>
                  ) : (
                    'Confirmar y Enviar'
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 6: Success State */}
          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="inline-block mb-6"
              >
                <CheckCircle2 className="w-24 h-24 text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]" />
              </motion.div>
              
              <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                Solicitud Registrada
              </h2>
              
              <div className="bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-2xl p-6 mb-8 max-w-md mx-auto">
                <p className="text-[#00e5ff] font-semibold mb-2">
                  {formData.sla === 'Premium' 
                    ? '⚡ Proceso Automatizado Iniciado' 
                    : formData.sla === 'Email'
                    ? '✉️ Responderemos en 24-48h'
                    : '📞 Te llamaremos en 24-72h'
                  }
                </p>
                <p className="text-slate-400 text-sm">
                  Hemos recibido tu solicitud para <strong className="text-white">{formData.service}</strong>
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <a
                  href={`https://wa.me/34XXXXXXXXX?text=Hola, acabo de completar el formulario del Kit Digital. Mi nombre es ${formData.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] rounded-xl text-white font-bold text-lg transition-all hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  Hablar por WhatsApp AHORA
                </a>
                
                <button
                  onClick={reset}
                  className="w-full px-8 py-3 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] rounded-xl text-white font-medium transition-all"
                >
                  Volver a la web
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
