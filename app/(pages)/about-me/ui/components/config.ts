import {
    BarChart3,
    CheckCircle2,
    Database,
    FileText,
    GitBranch,
    Layers,
    Search,
    Server,
    type LucideIcon,
} from "lucide-react"

export interface HighlightItem {
    id: number
    title: string
    icon: LucideIcon
}

export interface MetaItem {
    id: number
    title: string
    description: string
    icon: LucideIcon
}

export const highlights: HighlightItem[] = [
    {
        id: 1,
        title: 'Estructuro soluciones antes de escribir código',
        icon: Layers
    },
    {
        id: 2,
        title: 'Trabajo el flujo completo, no solo una parte',
        icon: GitBranch
    },
    {
        id: 3,
        title: 'Analizo problemas antes de implementar',
        icon: Search
    },
    {
        id: 4,
        title: 'Cuido que lo que hago funcione y se mantenga',
        icon: CheckCircle2
    }
]

export const metaItems = [
    {
        id: 1,
        title: "APIs y backend",
        description: "Servicios en .NET para exponer y procesar datos",
        icon: Server
    },
    {
        id: 2,
        title: "Manejo de datos",
        description: "Consultas y estructuras en SQL Server y PostgreSQL",
        icon: Database
    },
    {
        id: 3,
        title: "Reportes y flujo de información",
        description: "Procesamiento y consolidación de datos desde múltiples fuentes",
        icon: BarChart3
    },
    {
        id: 4,
        title: "Integración de sistemas",
        description: "Comunicación entre frontend, backend y servicios",
        icon: FileText
    }
] as const