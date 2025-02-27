import { createFileRoute } from "@tanstack/react-router";
import term1 from "../assets/term1.png";  

export const Route = createFileRoute("/term")({
	component: TermComponent,
});

function TermComponent() {
	return (
		<div className="h-full text-black bg-white pb-10 md:my-0 mt-0">
      <div className="pt-40 md:pl-15 grid grid-cols-2 sm:grid=cols-6 max-sm:pt-20 ">
          <div className="col-span-1 max-sm:col-span-full max-sm:flex max-sm:justify-center">
            <h1 className="text-black font-bold text-3xl md:pl-5">Terms & Conditions</h1>
          </div>

          <div className="col-span-1 row-span-2 max-sm:col-span-full max-sm:mt-10 max-sm:flex max-sm:justify-center">
            <img src={term1} alt="" className="w-[525px] sm:pl-20"/>
          </div>

          <div className="col-span-1 row-span-2 max-sm:col-span-full mt-10">
            <p className="text-black text-md pl-5 text-lg">Please read and understand these terms and conditions before using ReLeaf Fashion services. By accessing or using this site, you agree to all applicable terms related to the features provided, including preloved marketplace, donations, and community.</p>
          </div>
      </div>

      <div className="md:pl-20 space-y-5 pl-5">
        <h1 className="text-black font-bold text-3xl">Pengenalan</h1>
        <p className="text-black mt-5 text-lg">Selamat datang di ReLeaf Fashion! Platform ini bertujuan untuk mendukung gaya hidup berkelanjutan melalui pertukaran dan jual-beli pakaian preloved, serta inisiatif donasi pakaian. Dengan menggunakan situs web ini, Anda menyetujui syarat dan ketentuan berikut.</p>
        <h1 className="text-black font-bold text-3xl">Layanan yang Disediakan</h1>
        <p className="text-black text-lg">Releaf fashion menyediakan:</p>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li><span className="font-bold text-lg">Marketplace :</span> Tempat untuk mencari dan menjual pakaian preloved, memungkinkan pengguna menemukan pilihan fashion yang lebih ramah lingkungan. Menampilkan galeri pakaian preloved yang tersedia untuk ditukar. Transaksi dilakukan langsung oleh pengguna tanpa campur tangan platform.</li>
          <li><span className="font-bold text-lg">Learn & Act:</span> Akses ke berbagai materi edukasi seputar fashion berkelanjutan serta panduan untuk berdonasi pakaian yang masih layak pakai.</li>
          <li><span className="font-bold text-lg">Community</span>  Ruang bagi pengguna untuk terhubung melalui forum diskusi, berbagi pengalaman, serta mendapatkan informasi terbaru tentang gaya hidup berkelanjutan.</li>
        </ol>
        <h1 className="font-bold text-3xl">Ketentuan Donasi Pakaian</h1>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li className="text-lg">Pengguna dapat menghubungi tim ReLeaf Fashion melalui kontak yang tersedia untuk mengatur pengambilan donasi</li>
          <li className="text-lg">Pakaian yang didonasikan akan disalurkan kepada mereka yang membutuhkan atau didaur ulang jika tidak layak pakai.</li>  
        </ol>
        <h1 className="font-bold text-3xl">Forum Diskusi dan Komunitas</h1>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li className="text-lg">Forum digunakan untuk berbagi informasi dan diskusi terkait sustainable fashion.</li>
          <li className="text-lg">Pengguna dilarang memposting konten yang mengandung unsur SARA, diskriminatif, atau melanggar hukum.</li>
          <li className="text-lg">ReLeaf Fashion berhak menghapus konten yang dianggap tidak sesuai dengan pedoman komunitas.</li>  
        </ol>
        <h1 className="font-bold text-3xl">Batasan Tanggung Jawab</h1>
        <ol className="list-outside list-decimal pl-4 md:pl-4">
          <li className="text-lg">ReLeaf Fashion hanya menyediakan platform untuk menampilkan informasi dan tidak terlibat dalam transaksi atau pertukaran langsung.</li>
          <li className="text-lg">Kami tidak bertanggung jawab atas produk yang ditampilkan di marketplace atau galeri tukar pakaian.</li>
          <li className="text-lg">Segala bentuk transaksi yang terjadi merupakan tanggung jawab pengguna sepenuhnya.</li>  
        </ol>
        <h1 className="font-bold text-3xl">Perubahan dan Pembaruan</h1>
        <p className="text-lg">Kami berhak memperbarui atau mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diinformasikan melalui situs web.</p>
        <h1 className="font-bold text-3xl">Kontak</h1>
        <p className="text-lg">Jika ada pertanyaan terkait syarat dan ketentuan ini, silakan hubungi kami melalui kontak yang tersedia di situs web.</p>
      </div>

		</div>
	);
}
