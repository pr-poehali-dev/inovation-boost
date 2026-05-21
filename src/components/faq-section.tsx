import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое фиджитал гонки?",
      answer:
        "Фиджитал гонки (phygital) — это соревнования, объединяющие реальный и цифровой мир. Пилоты управляют настоящими машинами на физической трассе, а данные в реальном времени транслируются онлайн с интерактивной статистикой.",
    },
    {
      question: "Как купить билет на гонку?",
      answer:
        "Выберите тип билета (стандарт или VIP), укажите количество мест и оплатите онлайн. Электронный билет придёт на вашу почту в течение 30 секунд после оплаты.",
    },
    {
      question: "Какие типы билетов доступны?",
      answer:
        "Доступны стандартные билеты, семейные пакеты и VIP-пакеты с доступом в паддок, встречей с пилотами и выделенными местами на лучших трибунах. Для ранних покупателей действует скидка до 30%.",
    },
    {
      question: "Как смотреть гонки онлайн?",
      answer:
        "Перейдите в раздел «Трансляции» на сайте. Все текущие и прошедшие гонки доступны прямо в браузере — без скачивания приложений. Можно выбрать угол камеры и следить за статистикой в режиме реального времени.",
    },
    {
      question: "Можно ли вернуть билет?",
      answer:
        "Да, возврат возможен не позднее чем за 48 часов до начала события. Напишите нам через форму обратной связи или на электронную почту — оформим возврат в течение 1-2 рабочих дней.",
    },
    {
      question: "Как получить уведомление о следующей гонке?",
      answer:
        "В разделе «Трансляции» есть расписание предстоящих событий. Нажмите «Подписаться» рядом с интересующей гонкой, и мы пришлём уведомление на почту за час до старта.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что нужно знать о фиджитал гонках, билетах и трансляциях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}