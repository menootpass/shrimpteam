import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Medium Style */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e6e6e6]">
        <div className="max-w-[1192px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14">
            <a href="/" className="text-2xl font-bold text-black">
              M
            </a>
          </div>
        </div>
      </header>

      {/* Article Content - Medium Reading Layout */}
      <main className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* Author Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Shrimp Team"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-[#242424]">Shrimp Team</div>
              <div className="text-sm text-[#757575]">Nov 15, 2025 · 8 min read</div>
            </div>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#242424] mb-6 leading-tight font-serif tracking-tight">
          Inovasi Pupuk Cepat Glagah: Transformasi Limbah Tambak Udang Menjadi Pupuk Organik (Aksi SDG 12 & 15) "Shrimp Team"
        </h1>

        {/* Article Subtitle/Lead */}
        <h2 className="text-2xl sm:text-3xl text-[#757575] font-normal mb-10 leading-relaxed font-serif">
          Sebuah inovasi berkelanjutan yang mengubah limbah tambak udang menjadi pupuk organik berkualitas tinggi, mendukung Sustainable Development Goals 12 dan 15.
        </h2>

        {/* Article Image */}
        <figure className="mb-10">
          <div className="w-full relative rounded-lg overflow-hidden">
            <Image
              src="/carousel.png"
              alt="Inovasi Pupuk Cepat Glagah"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-[#757575] mt-3 text-center">
            Ilustrasi proses transformasi limbah tambak udang menjadi pupuk organik
          </figcaption>
        </figure>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none">
          <div className="font-serif text-[21px] leading-[32px] text-[#242424] space-y-6">
            <p>
              Dalam upaya mendukung Sustainable Development Goals (SDG) 12 tentang Konsumsi dan Produksi yang Bertanggung Jawab, serta SDG 15 tentang Kehidupan di Darat, tim "Shrimp Team" telah mengembangkan inovasi revolusioner berupa pupuk organik cepat yang berasal dari limbah tambak udang. Inovasi ini tidak hanya mengatasi masalah limbah, tetapi juga memberikan solusi berkelanjutan untuk pertanian organik.
            </p>

            <p>
              Tambak udang merupakan salah satu sektor perikanan yang berkembang pesat di Indonesia. Namun, pertumbuhan industri ini juga menghasilkan limbah organik dalam jumlah besar, terutama dari sisa pakan, kotoran udang, dan sisa-sisa organik lainnya. Limbah ini seringkali dibuang begitu saja atau dibiarkan terakumulasi, yang dapat menyebabkan pencemaran lingkungan dan masalah kesehatan.
            </p>

            <h2 className="text-3xl font-bold text-[#242424] mt-12 mb-6 font-serif">
              Proses Transformasi Limbah
            </h2>

            <p>
              Proses transformasi limbah tambak udang menjadi pupuk organik "Pupuk Cepat Glagah" melibatkan beberapa tahap penting. Pertama, limbah dikumpulkan dan dipisahkan dari material non-organik. Kemudian, limbah tersebut melalui proses fermentasi menggunakan mikroorganisme yang dipilih secara khusus untuk mempercepat dekomposisi.
            </p>

            <p>
              Proses fermentasi ini memakan waktu lebih singkat dibandingkan dengan metode kompos tradisional, sehingga menghasilkan pupuk organik yang siap digunakan dalam waktu yang lebih cepat. Mikroorganisme yang digunakan dalam proses ini tidak hanya mempercepat dekomposisi, tetapi juga meningkatkan kandungan nutrisi dalam pupuk akhir.
            </p>

            <h2 className="text-3xl font-bold text-[#242424] mt-12 mb-6 font-serif">
              Manfaat untuk Lingkungan
            </h2>

            <p>
              Inovasi ini memberikan manfaat ganda bagi lingkungan. Di satu sisi, limbah tambak udang yang sebelumnya menjadi masalah lingkungan kini dapat dimanfaatkan dengan baik. Di sisi lain, pupuk organik yang dihasilkan dapat mengurangi ketergantungan pada pupuk kimia sintetis, yang seringkali memiliki dampak negatif terhadap tanah dan ekosistem.
            </p>

            <p>
              Penggunaan pupuk organik dari limbah tambak udang juga mendukung pertanian berkelanjutan. Pupuk ini tidak hanya menyuburkan tanah, tetapi juga meningkatkan kesehatan tanah dalam jangka panjang. Kandungan organik yang tinggi dalam pupuk ini membantu meningkatkan kapasitas retensi air tanah dan mendukung kehidupan mikroorganisme tanah yang bermanfaat.
            </p>

            <h2 className="text-3xl font-bold text-[#242424] mt-12 mb-6 font-serif">
              Dampak terhadap SDG 12 dan 15
            </h2>

            <p>
              Inovasi "Pupuk Cepat Glagah" secara langsung mendukung pencapaian SDG 12 (Konsumsi dan Produksi yang Bertanggung Jawab) dengan mengubah limbah menjadi sumber daya yang bernilai. Proses ini mengimplementasikan prinsip ekonomi sirkular, di mana limbah tidak lagi menjadi beban, melainkan menjadi input untuk proses produksi baru.
            </p>

            <p>
              Sementara itu, dukungan terhadap SDG 15 (Kehidupan di Darat) terlihat dari kontribusi pupuk organik ini terhadap kesehatan tanah dan ekosistem darat. Penggunaan pupuk organik membantu memulihkan dan mempertahankan kesuburan tanah, yang pada akhirnya mendukung keanekaragaman hayati dan produktivitas pertanian yang berkelanjutan.
            </p>

            <h2 className="text-3xl font-bold text-[#242424] mt-12 mb-6 font-serif">
              Potensi Pengembangan
            </h2>

            <p>
              Inovasi ini memiliki potensi besar untuk dikembangkan lebih lanjut. Dengan teknologi yang tepat, proses produksi dapat ditingkatkan skalanya untuk memenuhi kebutuhan pasar yang lebih luas. Selain itu, penelitian lebih lanjut dapat dilakukan untuk mengoptimalkan komposisi nutrisi dan mempercepat waktu produksi.
            </p>

            <p>
              Kolaborasi antara sektor perikanan dan pertanian melalui inovasi ini juga membuka peluang baru untuk pengembangan ekonomi lokal. Petani dapat memperoleh pupuk organik berkualitas dengan harga yang lebih terjangkau, sementara pengelola tambak udang dapat mengubah limbah mereka menjadi sumber pendapatan tambahan.
            </p>

            <h2 className="text-3xl font-bold text-[#242424] mt-12 mb-6 font-serif">
              Kesimpulan
            </h2>

            <p>
              Inovasi "Pupuk Cepat Glagah" dari Shrimp Team merupakan contoh nyata bagaimana masalah lingkungan dapat diubah menjadi solusi yang berkelanjutan. Dengan mengubah limbah tambak udang menjadi pupuk organik berkualitas, inovasi ini tidak hanya mengatasi masalah limbah, tetapi juga mendukung pertanian berkelanjutan dan pencapaian SDG 12 dan 15.
            </p>

            <p>
              Keberhasilan inovasi ini menunjukkan bahwa dengan kreativitas dan komitmen terhadap keberlanjutan, kita dapat menciptakan solusi yang menguntungkan bagi lingkungan, ekonomi, dan masyarakat. Semoga inovasi ini dapat menginspirasi pengembangan teknologi serupa di berbagai sektor lainnya.
            </p>
          </div>
        </article>

        {/* Article Footer - Tags and Actions */}
        <div className="mt-16 pt-8 border-t border-[#e6e6e6]">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-[#757575] px-3 py-1.5 bg-[#f5f5f5] rounded-full hover:bg-[#e6e6e6] transition-colors cursor-pointer">
              SDG 12
            </span>
            <span className="text-sm text-[#757575] px-3 py-1.5 bg-[#f5f5f5] rounded-full hover:bg-[#e6e6e6] transition-colors cursor-pointer">
              SDG 15
            </span>
            <span className="text-sm text-[#757575] px-3 py-1.5 bg-[#f5f5f5] rounded-full hover:bg-[#e6e6e6] transition-colors cursor-pointer">
              Pupuk Organik
            </span>
            <span className="text-sm text-[#757575] px-3 py-1.5 bg-[#f5f5f5] rounded-full hover:bg-[#e6e6e6] transition-colors cursor-pointer">
              Lingkungan
            </span>
            <span className="text-sm text-[#757575] px-3 py-1.5 bg-[#f5f5f5] rounded-full hover:bg-[#e6e6e6] transition-colors cursor-pointer">
              Inovasi
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-6 border-t border-[#e6e6e6]">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5] rounded-full transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#757575]">
                <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#242424] hover:bg-[#f5f5f5] rounded-full transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#757575]">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-16 pt-8 border-t border-[#e6e6e6]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-[#e6e6e6] flex items-center justify-center overflow-hidden flex-shrink-0">
              <span className="text-lg font-medium text-[#757575]">ST</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#242424] mb-1">Shrimp Team</h3>
              <p className="text-sm text-[#757575] mb-4">
                Tim inovator yang berdedikasi untuk menciptakan solusi berkelanjutan dalam pengelolaan limbah dan pertanian organik.
              </p>
              <button className="px-4 py-1.5 text-sm font-normal text-[#242424] border border-[#e6e6e6] rounded-full hover:bg-[#f5f5f5] transition-colors">
                Follow
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e6e6e6] mt-20">
        <div className="max-w-[1192px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="/" className="text-xl font-bold text-black">M</a>
              <span className="text-sm text-[#757575]">© 2024</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#757575]">
              <a href="#" className="hover:text-[#242424] transition-colors">About</a>
              <a href="#" className="hover:text-[#242424] transition-colors">Help</a>
              <a href="#" className="hover:text-[#242424] transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
