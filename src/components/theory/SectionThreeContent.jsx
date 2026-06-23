function FormulaBox({ children }) {
  return (
    <div className="inline-block rounded-lg border border-blue-200 bg-white px-4 py-2 font-mono text-sm font-bold text-blue-700 shadow-sm">
      {children}
    </div>
  );
}

function SectionThreeContent() {
  return (
    <div className="mt-8 space-y-8 text-left">
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-blue-800">
          7. Các hình thức biểu hiện của Giá trị thặng dư
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Trong nền kinh tế thị trường, giá trị thặng dư không xuất hiện trực
          tiếp mà biểu hiện qua nhiều hình thức như chi phí sản xuất, lợi nhuận,
          tỷ suất lợi nhuận, lợi nhuận bình quân, lợi nhuận thương nghiệp, lợi
          tức và địa tô.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
        <h4 className="text-lg font-bold text-blue-900">
          1. Chi phí sản xuất tư bản chủ nghĩa (k)
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Để sản xuất hàng hóa, nhà tư bản phải ứng ra một lượng tư bản để mua
          tư liệu sản xuất (c) và sức lao động (v).
        </p>
        <FormulaBox>k = c + v</FormulaBox>
        <p className="text-sm text-slate-700 leading-relaxed">
          Khi xuất hiện chi phí sản xuất, công thức giá trị hàng hóa W = c + v +
          m sẽ trở thành W = k + m.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Chi phí sản xuất làm xóa nhòa sự khác biệt giữa tư bản bất biến (c) và
          tư bản khả biến (v), khiến người ta lầm tưởng mọi bộ phận tư bản đều
          tạo ra giá trị mới, từ đó che giấu nguồn gốc thực sự của giá trị thặng
          dư là sức lao động.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-100 bg-white p-5">
        <h4 className="text-lg font-bold text-blue-900">
          2. Bản chất của lợi nhuận (p)
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Khi giá trị thặng dư được so sánh với toàn bộ tư bản ứng trước (k), nó
          mang hình thái biến tướng là lợi nhuận (p).
        </p>
        <FormulaBox>W = k + p</FormulaBox>
        <p className="text-sm text-slate-700 leading-relaxed">
          Lợi nhuận và giá trị thặng dư thường không bằng nhau về lượng đối với
          từng hàng hóa riêng biệt do cung cầu. Nhưng xét trên toàn xã hội thì:
          Tổng lợi nhuận = Tổng giá trị thặng dư.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Lợi nhuận là hình thái biểu hiện của giá trị thặng dư trên bề mặt nền
          kinh tế thị trường.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
        <h4 className="text-lg font-bold text-blue-900">
          3. Tỷ suất lợi nhuận (p') và các nhân tố ảnh hưởng
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Là tỷ lệ phần trăm giữa lợi nhuận (p) và toàn bộ tư bản ứng trước (K).
        </p>
        <FormulaBox>p' = (p / K) × 100% = (m / (c + v)) × 100%</FormulaBox>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">
            Các nhân tố ảnh hưởng:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Tỷ suất giá trị thặng dư (m'): m' càng cao thì p' càng lớn.</li>
            <li>
              Cấu tạo hữu cơ của tư bản (c/v): nếu c/v tăng thì p' có xu hướng
              giảm khi m' không đổi.
            </li>
            <li>
              Tốc độ chu chuyển của tư bản: quay vòng càng nhanh thì p' hàng năm
              càng cao.
            </li>
            <li>
              Tiết kiệm tư bản bất biến: giảm chi phí máy móc, nguyên liệu giúp
              tăng p'.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-100 bg-white p-5">
        <h4 className="text-lg font-bold text-blue-900">
          4. Lợi nhuận bình quân (p̄)
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Do cạnh tranh giữa các ngành, tư bản di chuyển từ ngành có tỷ suất lợi
          nhuận thấp sang ngành có tỷ suất lợi nhuận cao, từ đó hình thành tỷ
          suất lợi nhuận bình quân (p̄') chung cho toàn xã hội.
        </p>
        <div className="flex flex-wrap gap-2">
          <FormulaBox>p̄ = p̄' × K</FormulaBox>
          <FormulaBox>GCSX = k + p̄</FormulaBox>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Khi đó, giá trị hàng hóa chuyển hóa thành giá cả sản xuất.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
        <h4 className="text-lg font-bold text-blue-900">
          5. Lợi nhuận thương nghiệp
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Là một phần của giá trị thặng dư được tạo ra trong sản xuất, nhưng nhà
          tư bản công nghiệp nhường lại cho nhà tư bản thương nghiệp để thực
          hiện việc lưu thông hàng hóa.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Nguồn gốc thực sự vẫn là lao động không công của công nhân sản xuất.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-100 bg-white p-5">
        <h4 className="text-lg font-bold text-blue-900">6. Lợi tức (z)</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Là một phần của lợi nhuận bình quân mà nhà tư bản đi vay phải trả cho
          nhà tư bản cho vay để được sử dụng tiền tệ.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Đây là sự phân chia giá trị thặng dư giữa người sở hữu tiền và người
          sử dụng tiền để kinh doanh.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
        <h4 className="text-lg font-bold text-blue-900">
          7. Địa tô tư bản chủ nghĩa (R)
        </h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Là phần giá trị thặng dư siêu ngạch vượt ra ngoài lợi nhuận bình quân
          mà nhà tư bản nông nghiệp phải nộp cho chủ đất.
        </p>
        <p className="text-sm font-semibold text-slate-800">
          Gồm hai loại chính:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
          <li>Địa tô chênh lệch: do độ màu mỡ hoặc vị trí đất.</li>
          <li>Địa tô tuyệt đối: do độc quyền sở hữu đất đai.</li>
        </ul>
      </section>
    </div>
  );
}

export default SectionThreeContent;