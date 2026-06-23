import { Building2, ShoppingCart, Landmark } from "lucide-react";

function SectionOneContent() {
  return (
    <div className="mt-8 space-y-8 text-left">
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-rose-800">
          Nghịch lý từ các ngành tỷ đô
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Trước tiên, chúng ta hãy xem qua một chút về bức tranh doanh thu và lợi nhuận của các ngành như thương mại, ngân hàng, và bất động sản trong thời gian gần đây:
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {/* Bất động sản */}
          <div className="bg-white p-5 rounded-2xl border-2 border-rose-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Building2 className="w-16 h-16 text-rose-900" />
            </div>
            <h4 className="font-bold text-rose-900 mb-3 flex items-center gap-2 relative z-10">
              <span className="bg-rose-100 p-2 rounded-lg"><Building2 className="w-5 h-5 text-rose-700" /></span>
              Bất động sản
            </h4>
            <p className="text-sm text-slate-700 relative z-10">
              Căn hộ vùng ven TP HCM, nhất là Bình Dương, ngày càng hiếm loại hình nhà giá rẻ dưới <strong>35 triệu đồng/m2</strong>, khiến người mua ở thực khó tiếp cận.
            </p>
            <p className="mt-3 text-xs text-rose-600 font-semibold italic relative z-10">
              *Nguồn: Báo VnExpress
            </p>
          </div>

          {/* Thương mại Bán lẻ */}
          <div className="bg-white p-5 rounded-2xl border-2 border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <ShoppingCart className="w-16 h-16 text-blue-900" />
            </div>
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2 relative z-10">
              <span className="bg-blue-100 p-2 rounded-lg"><ShoppingCart className="w-5 h-5 text-blue-700" /></span>
              Thương mại (Bán lẻ)
            </h4>
            <ul className="text-sm text-slate-700 space-y-2 relative z-10">
              <li><strong>FPT Long Châu:</strong> Q1/2026 đạt doanh thu 10,343 tỷ đồng (Tăng 28%).</li>
              <li><strong>FPT Shop:</strong> Q1/2026 đạt 4,815 tỷ đồng (Tăng 31%).</li>
            </ul>
            <p className="mt-3 text-xs text-blue-600 font-semibold italic relative z-10">
              *Nguồn: Vietstock
            </p>
          </div>

          {/* Ngân hàng */}
          <div className="bg-white p-5 rounded-2xl border-2 border-emerald-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Landmark className="w-16 h-16 text-emerald-900" />
            </div>
            <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2 relative z-10">
              <span className="bg-emerald-100 p-2 rounded-lg"><Landmark className="w-5 h-5 text-emerald-700" /></span>
              Ngân hàng
            </h4>
            <p className="text-sm text-slate-700 relative z-10">
              Ghi nhận mức lợi nhuận khổng lồ và duy trì đà tăng trưởng tín dụng mạnh mẽ.
            </p>
            <p className="mt-3 text-xs text-emerald-600 font-semibold italic relative z-10">
              *Nguồn: BCTC BIDV Q1/2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 text-white p-6 rounded-2xl mt-8 border-l-4 border-rose-500 shadow-md">
        <h3 className="text-lg font-bold text-rose-400 mb-2">Câu hỏi đặt ra:</h3>
        <p className="text-slate-200 leading-relaxed">
          Chúng ta có thể thấy, 3 ngành này đều <strong>không trực tiếp tạo ra sản phẩm vật chất</strong> như lương thực, vải vóc,... Vậy thì, nguồn tiền hay của cải đó từ đâu mà ra?
        </p>
      </section>
    </div>
  );
}

export default SectionOneContent;