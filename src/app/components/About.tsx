import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada estratégia é desenvolvida com objetivos claros e métricas mensuráveis.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Entendemos as necessidades únicas de cada cliente e criamos soluções sob medida.',
  },
  {
    icon: Award,
    title: 'Excelência Criativa',
    description: 'Combinamos criatividade com estratégia para entregar campanhas que se destacam.',
  },
  {
    icon: TrendingUp,
    title: 'Inovação Constante',
    description: 'Estamos sempre à frente das tendências digitais e tecnológicas do mercado.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Sobre a <span className="text-primary">Dumonti</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Somos uma agência de marketing digital especializada em transformar marcas através de estratégias criativas e orientadas a resultados.
            </p>
            <p className="text-lg text-foreground/60 mb-8">
              Com mais de 10 anos de experiência no mercado, já ajudamos centenas de empresas a alcançarem seus objetivos digitais. Nossa equipe multidisciplinar combina expertise em marketing, design, tecnologia e análise de dados para criar campanhas que realmente fazem a diferença.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer Mais
              </motion.a>
              <motion.a
                href="#portfolio"
                className="px-8 py-4 bg-transparent border-2 border-secondary text-foreground rounded-full hover:bg-secondary/10 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Portfólio
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
