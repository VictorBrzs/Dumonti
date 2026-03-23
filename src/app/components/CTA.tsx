import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="text-secondary" size={18} />
          <span className="text-sm text-primary-foreground">Pronto para decolar?</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl mb-6 text-primary-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Vamos transformar suas
          <br />
          <span className="text-secondary">ideias em realidade</span>
        </motion.h2>

        <motion.p
          className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Agende uma conversa gratuita com nossos especialistas e descubra como podemos levar seu negócio ao próximo nível
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-primary-foreground text-primary rounded-full hover:bg-secondary transition-colors inline-flex items-center gap-2 justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Consulta Gratuita
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
          <motion.a
            href="#portfolio"
            className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Cases de Sucesso
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">24h</div>
            <div className="text-sm text-primary-foreground/80">Resposta Rápida</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-primary-foreground/80">Transparência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">ROI</div>
            <div className="text-sm text-primary-foreground/80">Garantido</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
