import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-commerce de Moda',
    category: 'Branding & Marketing Digital',
    description: 'Rebranding completo e estratégia de marketing que resultou em 300% de aumento nas vendas.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Branding', 'E-commerce', 'Social Media'],
  },
  {
    title: 'App de Delivery',
    category: 'Growth Marketing',
    description: 'Campanha de lançamento que conquistou 50k usuários nos primeiros 3 meses.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tags: ['Growth', 'App Marketing', 'Performance'],
  },
  {
    title: 'Clínica Médica',
    category: 'Marketing de Conteúdo',
    description: 'Estratégia de conteúdo que gerou 5x mais agendamentos através de SEO.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    tags: ['SEO', 'Conteúdo', 'Saúde'],
  },
  {
    title: 'Startup Fintech',
    category: 'Branding & Design',
    description: 'Identidade visual moderna e website que conquistou investidores.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Branding', 'UX/UI', 'Fintech'],
  },
  {
    title: 'Rede de Restaurantes',
    category: 'Social Media',
    description: 'Gestão de redes sociais que triplicou o engajamento e alcance orgânico.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['Social Media', 'Conteúdo', 'F&B'],
  },
  {
    title: 'Escola de Idiomas',
    category: 'Performance Marketing',
    description: 'Campanhas pagas que reduziram o CAC em 45% mantendo a qualidade dos leads.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    tags: ['Google Ads', 'Meta Ads', 'Educação'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Projetos que transformaram negócios e superaram expectativas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="text-primary-foreground" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-primary" size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos os Projetos
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
