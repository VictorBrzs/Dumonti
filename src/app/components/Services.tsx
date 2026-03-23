import { motion } from 'motion/react';
import { Megaphone, Palette, LineChart, Search, Globe, Video } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estratégias completas para aumentar sua presença online e alcançar seus objetivos de negócio.',
  },
  {
    icon: Palette,
    title: 'Design Criativo',
    description: 'Identidade visual marcante e materiais gráficos que comunicam a essência da sua marca.',
  },
  {
    icon: LineChart,
    title: 'Growth Marketing',
    description: 'Campanhas orientadas a dados para crescimento escalável e resultados mensuráveis.',
  },
  {
    icon: Search,
    title: 'SEO & SEM',
    description: 'Otimização para mecanismos de busca e gestão de campanhas pagas para máxima visibilidade.',
  },
  {
    icon: Globe,
    title: 'Social Media',
    description: 'Gestão estratégica de redes sociais para engajamento e construção de comunidade.',
  },
  {
    icon: Video,
    title: 'Produção de Conteúdo',
    description: 'Conteúdo audiovisual de alta qualidade que conta a história da sua marca.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(232, 213, 196) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Soluções completas de marketing digital para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>

                <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-foreground/70">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
