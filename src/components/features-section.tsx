import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Прямые трансляции гонок",
    description: "Смотрите гонки в режиме реального времени с несколькими ракурсами камер и живой статистикой прямо в браузере.",
    icon: "brain",
    badge: "LIVE",
  },
  {
    title: "Онлайн-покупка билетов",
    description: "Быстрый и безопасный выбор мест — обычные, VIP и трибуны. Электронный билет приходит на почту за секунды.",
    icon: "lock",
    badge: "Быстро",
  },
  {
    title: "Профили гонщиков",
    description: "Подробная статистика, история выступлений и достижения каждого участника чемпионата в удобном формате.",
    icon: "globe",
    badge: "Статистика",
  },
  {
    title: "Интерактивная трасса",
    description: "Изучите трассу на интерактивной карте: зоны обгонов, повороты, места для зрителей и ключевые точки.",
    icon: "zap",
    badge: "3D карта",
  },
  {
    title: "Уведомления о событиях",
    description: "Подпишитесь на расписание и получайте push-уведомления за час до старта каждой гонки.",
    icon: "link",
    badge: "Push",
  },
  {
    title: "Галерея лучших моментов",
    description: "Фотографии и видеохайлайты самых захватывающих моментов каждого заезда в высоком качестве.",
    icon: "target",
    badge: "Галерея",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё что нужно для гонок</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Один сайт — трансляции, билеты, гонщики и трасса. Фиджитал гонки ближе, чем вы думаете
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}