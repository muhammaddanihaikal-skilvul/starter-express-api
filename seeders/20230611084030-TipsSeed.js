"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tips",
      [
        {
          id: "tips-bqKY",
          judul: "Tips Mengurangi Jejak Karbon Anda",
          isi: "Kurangi Penggunaan Listrik: Matikan peralatan elektronik yang tidak digunakan, gantilah lampu pijar dengan lampu hemat energi, dan pertimbangkan penggunaan panel surya atau energi terbarukan di rumah Anda.\n\nGunakan Transportasi Ramah Lingkungan: Pilihlah berjalan kaki, bersepeda, atau menggunakan transportasi umum jika memungkinkan. Jika Anda harus menggunakan mobil, carilah kendaraan dengan efisiensi bahan bakar yang tinggi atau pertimbangkan mobil listrik.\n\nKurangi Konsumsi Daging: Produksi daging memiliki dampak besar terhadap emisi gas rumah kaca. Cobalah mengurangi konsumsi daging merah dan gantilah dengan sumber protein nabati seperti kacang-kacangan, biji-bijian, dan sayuran.\n\nGunakan Produk Ramah Lingkungan: Pilihlah produk-produk yang ramah lingkungan seperti produk dengan kemasan daur ulang atau bebas dari bahan kimia berbahaya. Kurangi penggunaan plastik sekali pakai dan beralihlah ke produk yang dapat digunakan ulang atau daur ulang.\n\nKurangi Pemborosan Makanan: Buang-buang makanan juga berarti membuang-buang sumber daya yang digunakan untuk memproduksi, mengemas, dan mengangkut makanan. Belilah hanya makanan yang Anda butuhkan, simpan makanan dengan benar, dan manfaatkan kembali sisa makanan untuk mengurangi pemborosan.\n\nDukung Energi Terbarukan: Dukung upaya pengembangan dan pemanfaatan energi terbarukan dengan memilih penyedia energi yang menggunakan sumber energi terbarukan. Anda juga dapat memasang panel surya di rumah atau investasi dalam proyek energi terbarukan.",
          gambar: "https://i.ibb.co/r4wnS2s/1.png",
        },
        {
          id: "tips-IpPe",
          judul: "Tips Mengurangi Penggunaan Plastik Sekali Pakai",
          isi: "Bawa Tas Belanja Sendiri: Selalu siapkan tas belanja kain atau tas ransel yang dapat digunakan kembali ketika berbelanja. Hindari penggunaan kantong plastik sekali pakai di toko.\n\nGunakan Botol Minum dan Wadah Makanan Bawaan: Bawa botol minum dan wadah makanan sendiri saat bepergian. Dengan menghindari penggunaan botol plastik dan kemasan makanan sekali pakai, Anda dapat mengurangi limbah plastik yang dihasilkan.\n\nGunakan Produk Alternatif: Coba cari produk rumah tangga yang tidak menggunakan plastik atau memilih produk yang menggunakan bahan plastik ramah lingkungan, seperti plastik biodegradable atau terbuat dari daur ulang.\n\nBeli Barang dengan Kemasan Minimal: Saat berbelanja, prioritaskan untuk membeli barang dengan kemasan minimal. Hindari produk yang dikemas dengan lapisan plastik berlebihan atau bahan kemasan yang sulit didaur ulang.\n\nHindari Sedotan Plastik: Ketika memesan minuman, mintalah untuk tidak diberikan sedotan plastik. Gunakan sedotan bambu atau logam yang dapat digunakan kembali sebagai alternatif.\n\nDaur Ulang dan Mendaur Ulang: Selalu daur ulang plastik yang dapat didaur ulang dan selalu periksa apakah ada fasilitas daur ulang plastik di komunitas Anda. Jika ada, pastikan Anda memanfaatkannya dengan benar.",
          gambar: "https://i.ibb.co/frJK3qp/2-5.jpg",
        },
        {
          id: "tips-WXwE",
          judul: "Tips Menjaga Keseimbangan Ekosistem",
          isi: "Dukung Pertanian Organik: Pilihlah makanan yang berasal dari pertanian organik atau lokal yang menggunakan metode pertanian berkelanjutan tanpa penggunaan pestisida dan pupuk kimia berlebihan.\n\nTanam Pohon dan Tumbuhan: Tanam pohon dan tanaman di sekitar rumah Anda atau ikut serta dalam program penanaman pohon. Tumbuhan berperan penting dalam menjaga keberlanjutan ekosistem dan mengurangi kadar karbon dioksida di atmosfer.\n\nDaur Ulang dan Mendaur Ulang: Lakukan praktik daur ulang dengan memisahkan sampah organik dan non-organik. Selain itu, coba untuk mendaur ulang barang-barang seperti kertas, kaca, dan plastik untuk mengurangi limbah dan penggunaan sumber daya alam.\n\nKurangi Penggunaan Pestisida: Hindari penggunaan pestisida dan bahan kimia berbahaya lainnya di halaman Anda. Sebagai gantinya, gunakan metode pengendalian hama alami seperti menggunakan serangga pemangsa atau bahan organik yang lebih ramah lingkungan.\n\nLindungi Habitat Satwa Liar: Jaga keberagaman hayati dengan melindungi habitat satwa liar di sekitar Anda. Biarkan lahan kosong atau taman di sekitar rumah tetap alami, berikan air dan tempat berlindung untuk burung dan serangga, dan hindari penggunaan pestisida yang dapat membahayakan satwa liar.\n\nKurangi Penggunaan Air: Hemat penggunaan air dengan menginstal peralatan yang efisien seperti shower dengan aliran air rendah dan toilet yang menggunakan sedikit air. Matikan keran saat tidak digunakan dan kumpulkan air hujan untuk digunakan dalam kegiatan berkebun atau membersihkan halaman.",
          gambar: "https://i.ibb.co/T4FrgZN/3.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tips", null, {});
  },
};
