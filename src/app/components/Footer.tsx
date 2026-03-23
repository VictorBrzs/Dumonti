import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: 'Sobre Nós', href: '#about' },
      { label: 'Serviços', href: '#services' },
      { label: 'Portfólio', href: '#portfolio' },
      { label: 'Blog', href: '#' },
    ],
    servicos: [
      { label: 'Marketing Digital', href: '#services' },
      { label: 'Design Criativo', href: '#services' },
      { label: 'SEO & SEM', href: '#services' },
      { label: 'Social Media', href: '#services' },
    ],
    contato: [
      { label: 'Fale Conosco', href: '#contact' },
      { label: 'Trabalhe Conosco', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="figma:asset/18236509fe6e9645021bb01dc1c57a76f0d21b80.png"
                alt="Dumonti Logo"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-2xl font-bold">Dumonti</span>
            </motion.div>
            <motion.p
              className="text-foreground/70 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Transformando marcas através de estratégias criativas e orientadas a resultados. Seu parceiro estratégico em marketing digital.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (columnIndex + 1) }}
            >
              <h3 className="text-lg mb-4 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors inline-block relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Dumonti. Todos os direitos reservados.
          </p>
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            Feito com <Heart size={14} className="text-primary fill-primary" /> pela equipe Dumonti
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
