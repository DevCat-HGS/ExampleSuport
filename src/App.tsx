import React, { useState } from 'react';
import { Send, CheckCircle, Headphones, Loader2 } from 'lucide-react';

function App() {
  const [problem, setProblem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setProblem('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-600 via-gray-700 to-white bg-clip-text text-transparent">
                CashWin
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-10 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Somos Soporte CashWin
            </h2>
            <p className="text-blue-100 text-lg">
              Estamos aquí para ayudarte con cualquier problema que tengas
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 py-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="problem" className="block text-sm font-semibold text-gray-700 mb-3">
                    Describe tu problema
                  </label>
                  <textarea
                    id="problem"
                    rows={6}
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none text-gray-800 placeholder-gray-400"
                    placeholder="Cuéntanos qué problema estás experimentando. Mientras más detalles nos proporciones, mejor podremos ayudarte..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !problem.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Problema</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  ¡Problema Enviado!
                </h3>
                <p className="text-gray-600 text-lg mb-2">
                  Hemos recibido tu reporte exitosamente
                </p>
                <p className="text-sm text-gray-500">
                  Nuestro equipo de soporte se pondrá en contacto contigo pronto
                </p>
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-green-700">
                    <span className="font-semibold">Número de ticket:</span> #CW{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            ¿Necesitas ayuda inmediata? Contacta nuestro soporte 24/7
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-3">
            <a href="mailto:soporte@cashwin.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
              soporte@cashwin.com
            </a>
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;