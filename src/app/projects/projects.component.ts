import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    image: string; // Placeholder CSS gradient or logic
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
            title: 'FinGPT (Financial Q&A LLM)',
            description: 'A RAG-based financial agent utilizing LangGraph and Chroma DB to retrieve SEC insights and answer complex financial queries, featuring offline term-matching fallbacks.',
            techStack: ['Python', 'LangGraph', 'Streamlit', 'ChromaDB'],
            link: 'https://github.com/Rajavenkateshgurugubelli/FinGPT',
            image: 'linear-gradient(135deg, #6c63ff 0%, #3f3d56 100%)'
        },
        {
            title: 'Streaming Fraud Pipeline',
            description: 'Real-time transaction classification and drift monitoring pipeline featuring simulated transaction streaming, XGBoost classification, and live data drift reporting via Evidently AI.',
            techStack: ['Python', 'XGBoost', 'Evidently AI', 'Scikit-Learn'],
            link: 'https://github.com/Rajavenkateshgurugubelli/fraud_pipeline',
            image: 'linear-gradient(135deg, #ff6b35 0%, #ff1100 100%)'
        },
        {
            title: 'Healthcare NLP Project',
            description: 'Clinical note parsing system built to extract key medical entities, anatomical relationships, and treatment plans from unstructured medical records.',
            techStack: ['Python', 'FastAPI', 'Streamlit', 'spaCy'],
            link: 'https://github.com/Rajavenkateshgurugubelli/Healthcare-NLP-Project',
            image: 'linear-gradient(135deg, #00d9c0 0%, #0f172a 100%)'
        },
        {
            title: 'Magical Listing',
            description: 'Generative AI real-estate assistant designed to extract property parameters from images and draft high-converting, professional MLS listings.',
            techStack: ['Java', 'Spring Boot', 'React', 'OpenAI'],
            link: 'https://github.com/Rajavenkateshgurugubelli/magical_listing',
            image: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
        },
        {
            title: 'OpenRAG-Eval (Evaluation Kit)',
            description: 'Lightweight evaluation framework for RAG systems computing retrieval relevance, context precision, and generation faithfulness using LLM judges.',
            techStack: ['Python', 'LangChain', 'Ragas', 'Pytest'],
            link: 'https://github.com/Rajavenkateshgurugubelli/OpenRAG-Eval',
            image: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        },
        {
            title: 'RAG Knowledge Assistant',
            description: 'Command line knowledge-base RAG assistant designed to index, query, and search over customized documentation directories locally.',
            techStack: ['Python', 'LangChain', 'FAISS', 'OpenAI'],
            link: 'https://github.com/Rajavenkateshgurugubelli/rag_knowledge_assistant',
            image: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)'
        }
    ];
}
