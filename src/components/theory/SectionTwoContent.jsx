function SectionTwoContent() {
  return (
    <div className="mt-8 space-y-8 text-left">
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-emerald-800">
          Chìa khóa giải mã: Giá trị thặng dư là gì?
        </h3>
        
        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
          <p className="text-lg text-slate-800 leading-relaxed font-medium">
            "Giá trị thặng dư là phần giá trị mới dôi ra ngoài giá trị sức lao động do công nhân làm thuê tạo ra và bị nhà tư bản chiếm hữu không công."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 border-b pb-2">Nguồn gốc thực sự</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Máy móc, nguyên vật liệu không thể tự sinh ra giá trị mới. Chỉ có <strong>sức lao động của con người</strong>, khi được tiêu dùng trong quá trình sản xuất, mới tạo ra một lượng giá trị lớn hơn giá trị của chính nó.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-2 border-b pb-2">Bản chất bóc lột</h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              Nhà tư bản trả lương cho người lao động (giá trị sức lao động), nhưng lại sở hữu toàn bộ sản phẩm do người lao động làm ra trong suốt ca làm việc. Phần chênh lệch đó chính là nguồn gốc của mọi sự làm giàu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionTwoContent;