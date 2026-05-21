import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Соколов",
    role: "Зритель, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Купил VIP-билет за 2 минуты! Атмосфера на трибунах невероятная — адреналин зашкаливает с первого метра трассы.",
  },
  {
    name: "Мария Захарова",
    role: "Болельщик команды RedShift Racing",
    avatar: "/professional-woman-scientist.png",
    content:
      "Слежу за каждой гонкой онлайн. Трансляции с несколькими камерами — это просто космос, будто сам сидишь в машине!",
  },
  {
    name: "Дмитрий Новиков",
    role: "Постоянный зритель, Санкт-Петербург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Интерактивная карта трассы помогла выбрать идеальное место. Видно весь ключевой поворот — незабываемо!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят зрители</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи болельщиков уже побывали на гонках и следят за трансляциями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}