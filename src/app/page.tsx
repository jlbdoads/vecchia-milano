import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const phone = "5544999934929";

  const buttons = [
    {
      text: "Atendimento Personalizado",
      message: "Olá, tenho interesse no atendimento personalizado.",
    },
    {
      text: "Agendar Horário",
      message: "Olá, eu gostaria de agendar um horário.",
    },
    {
      text: "Roupa Sob Medida",
      message: "Olá, tenho interesse em uma roupa sob medida.",
    },
    {
      text: "Falar com Consultor",
      message: "Olá, eu gostaria de falar com um consultor especialista.",
    },
  ];

  const products = [
    { name: "Terno Slim", price: "A partir de R$ 1.890", image: "/images/produto-1.jpg" },
    { name: "Blazer Italiano", price: "A partir de R$ 1.290", image: "/images/produto-2.jpg" },
    { name: "Camisa Social Premium", price: "A partir de R$ 290", image: "/images/produto-3.jpg" },
    { name: "Sapato Italiano", price: "A partir de R$ 890", image: "/images/produto-4.jpg" },
    { name: "Calça Italiana", price: "A partir de R$ 490", image: "/images/produto-5.jpg" },
    { name: "Acessórios", price: "A partir de R$ 90", image: "/images/produto-6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(26, 26, 26, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image 
              src="/images/logo.png" 
              alt="Vecchia Milano" 
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#marca" className="text-white hover:text-[#C9A227] transition">A Marca</a>
              <a href="#servicos" className="text-white hover:text-[#C9A227] transition">Serviços</a>
              <a href="#produtos" className="text-white hover:text-[#C9A227] transition">Coleção</a>
              <a href="#contato" className="text-white hover:text-[#C9A227] transition">Contato</a>
            </nav>
          </div>
          <Link
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá, tenho interesse.")}`}
            target="_blank"
            className="bg-[#C9A227] text-white px-5 py-2 rounded-full font-medium hover:bg-[#B8941F] transition text-sm"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-screen">
        <Image
          src="/images/banner.jpg"
          alt="Vecchia Milano"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              VECCHIA MILANO
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A escolha natural dos verdadeiros cavalheiros
            </p>
            <Link
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá, gostaria de conhecer a coleção.")}`}
              target="_blank"
              className="inline-block bg-[#C9A227] text-white px-8 py-4 rounded-full font-medium hover:bg-[#B8941F] transition text-lg"
            >
              Ver Coleção
            </Link>
          </div>
        </div>
      </section>

      {/* A Marca */}
      <section id="marca" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            A Marca
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Vecchia Milano representa a elegância atemporal do homem moderno. 
            Com mais de 15 anos de experiência no mercado de moda masculina, 
            oferecemos peças exclusivas que combinam tradição italiana com 
            contemporaneidade. Nosso compromisso é com a qualidade 
            incomparável e o atendimento personalizado que cada cliente merece.
          </p>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👔</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Alfaiataria Sob Medida</h3>
              <p className="text-gray-600">
                Ternos e blazers personalizados, desenvolvidos especialmente para o seu biotipo e estilo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Stylist</h3>
              <p className="text-gray-600">
                Consultoria de imagem para transformar seu guarda-roupa e elevar seu estilo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Loja Presencial</h3>
              <p className="text-gray-600">
                Experiência única de compras em nosso espaço exclusivo, com atendimento dedicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coleção */}
      <section id="produtos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-12">
            Nossa Coleção
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">{product.name}</h3>
                <p className="text-[#C9A227] font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botões de Contato */}
      <section id="contato" className="py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-300 mb-8">
            Estamos prontos para atender você. Escolha a melhor forma de comunicação:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {buttons.map((btn, index) => (
              <Link
                key={index}
                href={`https://wa.me/${phone}?text=${encodeURIComponent(btn.message)}`}
                target="_blank"
                className="bg-[#C9A227] text-white px-6 py-4 rounded-lg font-medium hover:bg-[#B8941F] transition flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {btn.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1A1A1A] text-center border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <Image 
            src="/images/logo.png" 
            alt="Vecchia Milano" 
            width={120} 
            height={40}
            className="h-10 w-auto mx-auto mb-4"
          />
          <p className="text-gray-500 text-sm">
            © 2026 Vecchia Milano. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <Link
        href={`https://wa.me/${phone}`}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </Link>
    </div>
  );
}
