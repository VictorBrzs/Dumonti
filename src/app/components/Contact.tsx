import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@dumonti.com.br',
      href: 'mailto:contato@dumonti.com.br',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (11) 9999-9999',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'São Paulo, SP - Brasil',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
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
            Vamos conversar sobre seu <span className="text-primary">Projeto</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar seu negócio a crescer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-8">Fale Conosco</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">{info.title}</div>
                    <div className="text-lg group-hover:text-primary transition-colors">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl mb-4">Horário de Atendimento</h4>
              <p className="text-foreground/70">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensagem
                <Send className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
