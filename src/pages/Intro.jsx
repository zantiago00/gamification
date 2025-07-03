import { Sparkles } from 'lucide-react'
import { Badge, Button } from 'shadcn-ui'
import { useNavigate } from 'react-router-dom'
import TrendBubble from '../components/TrendBubble'

export default function Intro() {
  const navigate = useNavigate()
  return (
    <section className="flex min-h-screen flex-col items-center justify-start md:justify-center text-center p-4" aria-label="Introducción">
      <div className="flex gap-2" aria-hidden="true">
        <TrendBubble className="animate-bounce delay-100">
          <Sparkles className="h-4 w-4" />
          <span>How can we leverage AI?</span>
        </TrendBubble>
        <TrendBubble className="animate-bounce delay-200">
          <Badge className="bg-red-500 text-white">Cube</Badge>
          <span>LLMs are the future!</span>
        </TrendBubble>
        <TrendBubble className="animate-bounce delay-300">
          <Badge className="bg-yellow-400">SCROLLR</Badge>
          <span>Just ask ChatGPT</span>
        </TrendBubble>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mt-6">Introducción al Storytelling Digital</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        ¡Todo el mundo habla de Storytelling! Pero cuando les preguntas de qué se trata, las opiniones son muy variadas.
        <br />
        Entender la teoría y sus enfoques puede parecer complicado, pero es la clave para aprovechar el ecosistema digital.
        <br />
        Esta serie de retos te facilitará el aprendizaje del concepto de Storytelling Digital.
      </p>
      <Button variant="default" className="mt-6" aria-label="Comenzar misión" onClick={() => navigate('/level/1')}>
        ¡Empezar misión!
      </Button>
    </section>
  )
}
