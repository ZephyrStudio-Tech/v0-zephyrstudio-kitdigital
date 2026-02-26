import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { MessageCircle, MapPin, Clock, ShieldCheck, ChevronDown, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto y Soporte | ZephyrStudio',
  description: 'Contacta con nuestro equipo de Agentes Digitalizadores. Evaluamos tu viabilidad para el Kit Digital en 60 segundos.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030305] pt-32 pb-24 relative overflow-hidden text-white font-sans">

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00e5ff]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[700px] h-[700px] bg-[#0018d8]/15 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">

        {/* =====================================
            1. HERO SPLIT LAYOUT
            ===================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">

          {/* LEFT COLUMN: Info & Deflection */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-2">
                {'¿En qué podemos'}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#0018d8]">{'ayudarte?'}</span>
              </h1>
            </div>

            {/* Deflection Banner (CRO) */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0018d8]/20 to-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,229,255,0.05)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00e5ff] shadow-[0_0_15px_#00e5ff]" />
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-[#00e5ff]" /> {'¿Buscas el Kit Digital?'}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                No pierdas el tiempo rellenando correos. Usa nuestro sistema automatizado para comprobar tu viabilidad en la base de datos de Red.es en solo 60 segundos.
              </p>
              <Link href="/wizard" className="inline-flex items-center justify-center w-full py-4 bg-[#00e5ff] hover:bg-white text-black rounded-xl font-extrabold transition-all shadow-[0_5px_15px_rgba(0,229,255,0.3)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                {'Iniciar Evaluación Gratuita →'}
              </Link>
            </div>

            {/* Support Channels */}
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-slate-400 text-sm">Para dudas rápidas o contacto directo con un agente:</p>
              <a
                href="https://wa.me/34602678771"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 text-[#25D366] hover:text-white rounded-xl font-bold transition-all self-start"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Generic Form */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Consultas Generales</h3>
              <p className="text-slate-400 text-sm">Soporte técnico, facturación o colaboraciones.</p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">Motivo de contacto</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-[#0018d8] focus:ring-4 focus:ring-[#0018d8]/10 transition-all cursor-pointer" defaultValue="">
                  <option value="" disabled>Selecciona un departamento</option>
                  <option value="soporte" className="bg-[#030305] text-white">Soporte Técnico (Clientes actuales)</option>
                  <option value="facturacion" className="bg-[#030305] text-white">Dudas de Facturación o Pagos</option>
                  <option value="colaboracion" className="bg-[#030305] text-white">Quiero ser Partner / Colaborador</option>
                  <option value="otros" className="bg-[#030305] text-white">Otras consultas generales</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">Nombre completo</label>
                <input type="text" placeholder="Tu nombre" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0018d8] focus:ring-4 focus:ring-[#0018d8]/10 transition-all" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">Correo electrónico corporativo</label>
                <input type="email" placeholder="tucorreo@empresa.com" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0018d8] focus:ring-4 focus:ring-[#0018d8]/10 transition-all" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-300">{'¿Cómo podemos ayudarte?'}</label>
                <textarea placeholder="Detalla tu consulta aquí..." className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#0018d8] focus:ring-4 focus:ring-[#0018d8]/10 transition-all min-h-[120px] resize-y" required></textarea>
              </div>

              <button type="submit" className="w-full py-4 mt-2 bg-white hover:bg-slate-200 text-black rounded-xl font-extrabold text-lg transition-all hover:-translate-y-0.5">
                Enviar Mensaje
              </button>

              <p className="text-xs text-slate-500 text-center mt-2">
                Al enviar, aceptas la <Link href="/politica-privacidad" className="text-slate-400 hover:text-white underline underline-offset-2">Política de Privacidad</Link>.
              </p>
            </form>
          </div>
        </div>

        {/* =====================================
            2. INFO OPERATIVA Y CONFIANZA
            ===================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pt-16 border-t border-white/10">
          <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-10 transition-all hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/[0.02]">
            <div className="w-14 h-14 bg-[#00e5ff]/10 text-[#00e5ff] rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Sede y Operativa</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Nuestra base de operaciones está en <strong>Madrid, España</strong>. Operamos de forma 100% telemática y prestamos servicio como Agentes Digitalizadores a todo el territorio nacional, Península e Islas.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-10 transition-all hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/[0.02]">
            <div className="w-14 h-14 bg-[#00e5ff]/10 text-[#00e5ff] rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Tiempos de Respuesta</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Nuestro equipo de soporte técnico y viabilidad responde a las consultas en horario laboral (09:00 - 18:00 CET) en un tiempo medio inferior a <strong>2 horas laborables</strong>.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-[24px] p-10 transition-all hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/[0.02]">
            <div className="w-14 h-14 bg-[#00e5ff]/10 text-[#00e5ff] rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Garantía Oficial</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Somos Agentes Digitalizadores Adheridos oficiales, auditados y aprobados por Red.es y el Gobierno de España para gestionar los fondos europeos NextGenerationEU.</p>
          </div>
        </div>

        {/* =====================================
            3. FAQS ACORDEÓN (NATIVE HTML)
            ===================================== */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Preguntas Frecuentes</h2>
            <p className="text-slate-400 text-lg">Resolvemos las dudas más comunes de forma inmediata.</p>
          </div>

          <div className="flex flex-col gap-4">

            <details className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-colors">
              <summary className="flex justify-between items-center p-6 text-white font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {'Soy cliente, ¿cómo sé el estado de la tramitación de mi bono?'}
                <ChevronDown className="w-5 h-5 text-[#00e5ff] transition-transform duration-300 group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                El estado de tu expediente es gestionado directamente por Red.es. Si firmaste el acuerdo con nosotros, te enviaremos notificaciones automáticas a tu correo cada vez que el estado cambie (Validación, Concesión, Despliegue). Si tienes dudas urgentes, usa nuestro WhatsApp de soporte.
              </div>
            </details>

            <details className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-colors">
              <summary className="flex justify-between items-center p-6 text-white font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {'Soy una gestoría o asesoría, ¿podemos colaborar?'}
                <ChevronDown className="w-5 h-5 text-[#00e5ff] transition-transform duration-300 group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                {'¡Por supuesto! Trabajamos con decenas de asesorías en toda España gestionando el Kit Digital para sus clientes. Selecciona "Quiero ser Partner / Colaborador" en el formulario de arriba, déjanos tus datos y nuestro responsable de canal te llamará hoy mismo.'}
              </div>
            </details>

            <details className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-colors">
              <summary className="flex justify-between items-center p-6 text-white font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {'He recibido el hardware (Mac/PC), ¿qué hago ahora?'}
                <ChevronDown className="w-5 h-5 text-[#00e5ff] transition-transform duration-300 group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                Al recibir el equipo, dentro de la caja encontrarás las instrucciones de encendido y el enlace para descargar el software de seguridad obligatorio (EDR) de ZephyrStudio. Si tienes algún problema con la instalación, selecciona "Soporte Técnico" en el formulario.
              </div>
            </details>

            <details className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-colors">
              <summary className="flex justify-between items-center p-6 text-white font-semibold cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                {'¿Qué ocurre si finalmente me deniegan la subvención?'}
                <ChevronDown className="w-5 h-5 text-[#00e5ff] transition-transform duration-300 group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                Como trabajamos a éxito en la gestión documental, si Red.es deniega tu subvención por deudas con Seguridad Social o Hacienda y no pueden ser subsanadas, cancelamos el proceso. <strong className="text-white">Tú no tienes que pagarnos absolutamente nada</strong> por el intento de tramitación.
              </div>
            </details>

          </div>
        </div>

      </div>
    </div>
  )
}
