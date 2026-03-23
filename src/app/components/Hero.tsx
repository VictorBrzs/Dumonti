import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
        >
          <Sparkles className="text-primary" size={18} />
          <span className="text-sm text-foreground/80">Marketing Digital de Alto Impacto</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforme sua
          <br />
          <span className="text-primary">Presença Digital</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Estratégias criativas e resultados mensuráveis para fazer sua marca crescer no mundo digital
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2 justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar Agora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
          <motion.a
            href="#portfolio"
            className="px-8 py-4 bg-transparent border-2 border-secondary text-foreground rounded-full hover:bg-secondary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Nosso Trabalho
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: '500+', label: 'Projetos Entregues' },
            { number: '98%', label: 'Clientes Satisfeitos' },
            { number: '10+', label: 'Anos de Experiência' },
            { number: '50+', label: 'Prêmios Conquistados' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
