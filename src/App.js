import Discussions from "./components/Discussions"
// Görevler:
// - Global count değişkeni yerine useState veya useReducer hook'unu kullanarak tartışma numaralarını güvenli şekilde yönetmelisiniz.
// - Tartışma listesi (Discussions) ve tartışma kartı (Discussion) bileşenlerini modüler hale getirip ayrı dosyalara taşıyın.
// - Mock bir veri seti oluşturarak tartışma kartlarını dinamik hale getirin ve veri tabanından geliyormuş gibi yapı kuralım.
// - React temellerine ve Tailwind CSS yapısına bağlı kalarak bileşenlerinizi geliştireceğiz.
// - Uygulamanın beklenen çıktısını görmek için public klasöründe yer alan preview.png dosyasını inceleyebilirsiniz.

function App() {

  return (
    <Discussions/>
  )
}
export default App