import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO, TechStart',
    content: 'A Dumonti transformou completamente nossa presença digital. Em 6 meses, nosso tráfego orgânico triplicou e as conversões aumentaram 250%. Equipe excepcional!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor de Marketing, RetailMax',
    content: 'Trabalhar com a Dumonti foi uma experiência transformadora. Eles não apenas entregaram resultados, mas nos ajudaram a entender melhor nosso público.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    name: 'Marina Costa',
    role: 'Fundadora, BeautyLab',
    content: 'A criatividade e o profissionalismo da equipe Dumonti são incomparáveis. Nosso Instagram cresceu de 5k para 100k seguidores em menos de um ano!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    name: 'Roberto Alves',
    role: 'Proprietário, FitGym',
    content: 'ROI excepcional! A Dumonti otimizou nossas campanhas pagas e reduzimos o custo por aquisição em 60% enquanto dobramos o número de matrículas.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    name: 'Julia Santos',
    role: 'CMO, EduTech',
    content: 'Parceria estratégica de verdade. A Dumonti não é apenas uma agência, é uma extensão do nosso time. Sempre trazem ideias inovadoras e executam com perfeição.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
  },
  {
    name: 'Fernando Lima',
    role: 'CEO, GreenFood',
    content: 'Excelência do início ao fim. Desde o primeiro contato até a entrega dos resultados, a Dumonti superou todas as expectativas. Altamente recomendado!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            O que dizem nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Resultados comprovados e clientes satisfeitos em diversos segmentos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 relative hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#6B0F1A" className="text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
