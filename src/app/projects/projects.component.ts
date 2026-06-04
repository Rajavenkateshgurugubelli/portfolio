import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link: string;
    image: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            id: 1,
            title: 'FinGPT (Financial Q&A LLM)',
            description: 'A RAG-based financial agent utilizing LangGraph and Chroma DB to retrieve SEC insights and answer complex financial queries, featuring offline term-matching fallbacks.',
            techStack: ['Python', 'LangGraph', 'Streamlit', 'ChromaDB'],
            link: 'https://github.com/Rajavenkateshgurugubelli/FinGPT',
            image: 'assets/fingpt.png'
        },
        {
            id: 2,
            title: 'Streaming Fraud Pipeline',
            description: 'Real-time transaction classification and drift monitoring pipeline featuring simulated transaction streaming, XGBoost classification, and live data drift reporting via Evidently AI.',
            techStack: ['Python', 'XGBoost', 'Evidently AI', 'Scikit-Learn'],
            link: 'https://github.com/Rajavenkateshgurugubelli/fraud_pipeline',
            image: 'assets/fraud_pipeline.png'
        },
        {
            id: 3,
            title: 'Healthcare NLP Project',
            description: 'Clinical note parsing system built to extract key medical entities, anatomical relationships, and treatment plans from unstructured medical records.',
            techStack: ['Python', 'FastAPI', 'Streamlit', 'spaCy'],
            link: 'https://github.com/Rajavenkateshgurugubelli/Healthcare-NLP-Project',
            image: 'assets/healthcare_nlp.png'
        },
        {
            id: 4,
            title: 'Magical Listing',
            description: 'Generative AI real-estate assistant designed to extract property parameters from images and draft high-converting, professional MLS listings.',
            techStack: ['Java', 'Spring Boot', 'React', 'OpenAI'],
            link: 'https://github.com/Rajavenkateshgurugubelli/magical_listing',
            image: 'assets/magical_listing.png'
        },
        {
            id: 5,
            title: 'OpenRAG-Eval (Evaluation Kit)',
            description: 'Lightweight evaluation framework for RAG systems computing retrieval relevance, context precision, and generation faithfulness using LLM judges.',
            techStack: ['Python', 'LangChain', 'Ragas', 'Pytest'],
            link: 'https://github.com/Rajavenkateshgurugubelli/OpenRAG-Eval',
            image: 'assets/openrag_eval.png'
        },
        {
            id: 6,
            title: 'RAG Knowledge Assistant',
            description: 'Command line knowledge-base RAG assistant designed to index, query, and search over customized documentation directories locally.',
            techStack: ['Python', 'LangChain', 'FAISS', 'OpenAI'],
            link: 'https://github.com/Rajavenkateshgurugubelli/rag_knowledge_assistant',
            image: 'assets/rag_assistant.png'
        }
    ];
}
