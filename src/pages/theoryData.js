import { Building2, Landmark, ShoppingCart, BrainCircuit } from "lucide-react";

export const theorySections = [
  {
    id: "01",
    title: "Đặt vấn đề: Nghịch lý từ các ngành tỷ đô",
    icon: ShoppingCart,
    iconTone: "bg-rose-100 text-rose-700",
    glow: "from-rose-400/20 via-transparent to-transparent",
    preview: "Phân tích doanh thu của Bất động sản, Bán lẻ và Ngân hàng.",
  },
  {
    id: "02",
    title: "Nguồn gốc: Giá trị thặng dư là gì?",
    icon: BrainCircuit,
    iconTone: "bg-emerald-100 text-emerald-700",
    glow: "from-emerald-400/20 via-transparent to-transparent",
    preview: "Chìa khóa giải mã nơi xuất phát của dòng tiền.",
  },
  {
    id: "03",
    title: "Các hình thái phân chia giá trị thặng dư",
    icon: Landmark,
    iconTone: "bg-blue-100 text-blue-700",
    glow: "from-blue-400/20 via-transparent to-transparent",
    usePopup: true,
    preview: "Lợi nhuận thương nghiệp, Lợi tức và Địa tô.",
  },
  {
    id: "04",
    title: "Giải mã: Bản chất 'Tiền đẻ ra tiền'",
    icon: Building2,
    iconTone: "bg-indigo-100 text-indigo-700",
    glow: "from-indigo-400/20 via-transparent to-transparent",
    usePopup: true,
    preview: "Kết luận về dòng tiền của nền kinh tế thị trường.",
  },
];

export const reviewChallenges = [
  {
    id: "01",
    title: "Huy động vốn nhàn rỗi",
    prompt:
      "Ngân hàng nhận tiền gửi tiết kiệm từ người dân và trả một mức lãi suất huy động.",
  },
  {
    id: "02",
    title: "Cho vay vốn đầu tư",
    prompt:
      "Ngân hàng cho nhà tư bản sản xuất (doanh nghiệp) vay lại số vốn đó với lãi suất cho vay cao hơn.",
  },
  {
    id: "03",
    title: "Tiến hành sản xuất",
    prompt:
      "Doanh nghiệp dùng vốn vay mua máy móc, nguyên vật liệu và thuê mướn công nhân.",
  },
  {
    id: "04",
    title: "Tạo ra giá trị thặng dư",
    prompt:
      "Công nhân lao động sản xuất, tạo ra giá trị mới lớn hơn giá trị sức lao động (sinh ra giá trị thặng dư).",
  },
  {
    id: "05",
    title: "Thu lợi nhuận bình quân",
    prompt:
      "Doanh nghiệp bán hàng hóa ra thị trường và thu về lợi nhuận (hình thái biến tướng của giá trị thặng dư).",
  },
  {
    id: "06",
    title: "Trích trả lợi tức",
    prompt:
      "Doanh nghiệp trích một phần từ lợi nhuận thu được để trả lãi vay (lợi tức) cho ngân hàng.",
  },
  {
    id: "07",
    title: "Bản chất lợi nhuận ngân hàng",
    prompt:
      "Ngân hàng lấy lãi cho vay trừ đi lãi huy động. Chênh lệch này chính là lợi nhuận ngân hàng, có nguồn gốc sâu xa từ sức lao động.",
  },
];

export const shuffleChallenges = (items) => {
  if (items.length <= 1) return [...items];

  const hasFixedPosition = (list) =>
    list.some((item, index) => item.id === items[index].id);

  let shuffled = [...items];
  let attempts = 0;

  while (attempts < 80) {
    shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[index],
      ];
    }
    if (!hasFixedPosition(shuffled)) return shuffled;
    attempts += 1;
  }

  return items.map((_, index) => items[(index + 1) % items.length]);
};

export const swapChallengePositions = (items, sourceId, targetId) => {
  if (!sourceId || !targetId || sourceId === targetId) return items;

  const sourceIndex = items.findIndex((item) => item.id === sourceId);
  const targetIndex = items.findIndex((item) => item.id === targetId);
  if (sourceIndex === -1 || targetIndex === -1) return items;

  const next = [...items];
  [next[sourceIndex], next[targetIndex]] = [
    next[targetIndex],
    next[sourceIndex],
  ];
  return next;
};

export const motionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};