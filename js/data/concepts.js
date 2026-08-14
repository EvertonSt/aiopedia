/* AIOPEDIA — catalog: concepts (fundamental ideas of AI) */
window.AIOPEDIA = window.AIOPEDIA || {};
window.AIOPEDIA.concepts = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    category: "concepts",
    year: 1956,
    tagline: "The field of building machines that perform tasks that normally require human intelligence.",
    summary: "The broad discipline of creating systems that perceive, reason, learn and act — from rule-based expert systems to today's neural networks.",
    body: [
      "Artificial intelligence is the science and engineering of making intelligent machines — especially intelligent computer programs. The term was coined in 1956 by John McCarthy for the Dartmouth Summer Research Project, a workshop that formally launched the field as a distinct discipline. Early optimism about general reasoning machines gave way to a succession of 'AI winters' as funding followed unmet promises, but each era also produced durable foundations: search, knowledge representation, expert systems, and later statistical machine learning.",
      "Modern AI is dominated by machine learning — systems that improve from data rather than from hand-written rules. A narrower distinction runs through everything: narrow (or weak) AI, which masters a single task such as translation or image recognition, and artificial general intelligence (AGI), a still-hypothetical system that can perform any intellectual task a human can. Contemporary frontier models are narrow in the strict sense, yet their breadth of capability has made the AGI question a live one once again."
    ],
    tags: ["field", "foundations", "history"],
    related: ["machine-learning", "neural-network", "agi", "expert-systems"],
    sources: ["McCarthy et al., 1955 — 'A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence'"],
    status: "core"
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "concepts",
    year: 1959,
    tagline: "Programs that improve with experience rather than with explicit instructions.",
    summary: "The subfield of AI in which systems learn patterns from data — today's dominant paradigm, split into supervised, unsupervised and reinforcement learning.",
    body: [
      "Machine learning is the study of computer algorithms that improve automatically through experience. Arthur Samuel, who coined the term in 1959 while building a checkers program, defined it as the field that gives computers the ability to learn 'without being explicitly programmed'. Instead of a human writing rules for every case, the system infers its own rules from examples. This shift — from programming behavior to programming the ability to learn behavior — is what makes modern AI possible.",
      "The discipline is usually divided into supervised learning (learning from labeled input–output pairs), unsupervised learning (finding structure in unlabeled data), and reinforcement learning (learning from reward signals through trial and error). Deep learning, a family of techniques based on multi-layer neural networks, has become so dominant that for many people 'machine learning' and 'deep learning' are nearly synonymous — though the older methods remain essential wherever data is scarce or interpretability matters."
    ],
    tags: ["field", "foundations", "statistics"],
    related: ["deep-learning", "neural-network", "reinforcement-learning", "supervised-learning", "unsupervised-learning"],
    sources: ["Samuel, 1959 — 'Some Studies in Machine Learning Using the Game of Checkers'"],
    status: "core"
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    category: "concepts",
    year: 2012,
    tagline: "Machine learning with many-layered neural networks that learn hierarchical representations.",
    summary: "A family of neural-network methods with many hidden layers, whose 2012 breakthrough on ImageNet ignited the modern AI era.",
    body: [
      "Deep learning refers to neural networks with many layers stacked between input and output. Each layer learns to represent the data at a different level of abstraction — edges, then shapes, then objects for images; letters, then words, then meaning for text. The 'depth' is what lets the network discover complex structure on its own, without a human engineer designing the features by hand. The ideas are decades old, but three ingredients made them practical: big datasets, GPU computing, and better training techniques such as ReLU activations, dropout and batch normalization.",
      "The field's public debut came in 2012, when AlexNet crushed the ImageNet image-recognition competition, halving the error rate of every prior approach. From there deep learning swept through speech recognition, translation and game playing, and culminated in the generative models that define the current era. Deep learning is not a separate science so much as the current dominant toolkit of machine learning — one that trades interpretability and sample efficiency for raw representational power."
    ],
    tags: ["field", "neural networks", "representation learning"],
    related: ["machine-learning", "neural-network", "transformer", "computer-vision"],
    sources: ["Krizhevsky, Sutskever & Hinton, 2012 — 'ImageNet Classification with Deep Convolutional Neural Networks'"],
    status: "core"
  },
  {
    id: "neural-network",
    name: "Neural Network",
    category: "concepts",
    year: 1943,
    tagline: "Computing systems loosely inspired by the brain, built from connected artificial neurons.",
    summary: "The foundational architecture of deep learning: layers of simple computing units whose weighted connections are tuned by training.",
    body: [
      "A neural network is a computation graph of simple units called neurons, each computing a weighted sum of its inputs and applying a nonlinear activation. Neurons are organized in layers; connections carry learned weights; and a training algorithm — typically backpropagation — adjusts those weights to reduce error. The design is only loosely inspired by biological neurons; it is better understood as a very flexible function approximator that can, in principle, represent almost any input–output mapping.",
      "The concept dates to McCulloch and Pitts (1943), with Frank Rosenblatt's Perceptron (1958) and the backpropagation algorithm (1986) as landmarks. Single-layer networks were shown to be severely limited, but networks with many hidden layers — 'deep' networks — proved extraordinarily capable once they could be trained efficiently. Today the term covers everything from small feed-forward classifiers to trillion-parameter transformer models, which are neural networks of a very specific, attention-based shape."
    ],
    tags: ["architecture", "foundations", "biomimicry"],
    related: ["deep-learning", "backpropagation", "perceptron", "transformer"],
    sources: ["McCulloch & Pitts, 1943 — 'A Logical Calculus of the Ideas Immanent in Nervous Activity'"],
    status: "core"
  },
  {
    id: "transformer",
    name: "Transformer",
    category: "concepts",
    year: 2017,
    tagline: "The attention-based architecture behind essentially every modern language model.",
    summary: "Introduced in 'Attention Is All You Need' (2017), the transformer replaced recurrence with self-attention and became the default architecture for AI.",
    body: [
      "The transformer is a neural architecture introduced by Google researchers in the 2017 paper 'Attention Is All You Need'. Instead of reading a sequence word-by-word like recurrent networks, it processes all tokens in parallel and lets each one attend to every other through a learned self-attention mechanism. This parallelism made training dramatically faster and longer-range, and the architecture scaled far better than anything before it.",
      "Transformers now underpin language models (GPT, Claude, Gemini, Llama, DeepSeek), vision models (ViT), speech, code generation and most multimodal systems. The architecture has proven so effective that 'large language model' and 'transformer-based model' are effectively synonyms in practice. Scaling these models — more data, more parameters, more compute — produced the emergent capabilities that define the modern AI era."
    ],
    tags: ["architecture", "nlp", "breakthrough"],
    related: ["attention-mechanism", "large-language-model", "embedding"],
    sources: ["Vaswani et al., 2017 — 'Attention Is All You Need'"],
    status: "core"
  },
  {
    id: "attention-mechanism",
    name: "Attention Mechanism",
    category: "concepts",
    year: 2014,
    tagline: "The technique of letting a model focus on the most relevant parts of its input.",
    summary: "A mechanism that weights input elements by relevance — the core building block of transformer models and modern sequence processing.",
    body: [
      "Attention is a mechanism that lets a model decide, at each step, which parts of its input matter most, by computing a weighted combination of input elements. First used in neural machine translation (Bahdanau et al., 2014) to help an encoder-decoder network align source and target words, it solved the information bottleneck of fixed-length context vectors and dramatically improved long-sentence translation.",
      "The transformer turned attention from an accessory into the entire architecture: self-attention lets every token in a sequence interact with every other token, producing rich context-aware representations. A softmax-weighted sum of 'values' scaled by the similarity between 'queries' and 'keys' is the mathematical heart of every modern large language model. Attention also gives researchers a rare window into model behavior, since the learned weights can be visualized to show which words a model 'looks at' when producing an answer."
    ],
    tags: ["architecture", "nlp", "core mechanism"],
    related: ["transformer", "large-language-model", "embedding"],
    sources: ["Bahdanau, Cho & Bengio, 2014 — 'Neural Machine Translation by Jointly Learning to Align and Translate'"],
    status: "core"
  },
  {
    id: "tokenization",
    name: "Tokenization",
    category: "concepts",
    tagline: "How text is split into the discrete units a model actually processes.",
    summary: "The step that converts raw text into tokens — the atoms of modern language models, usually sub-word units rather than whole words.",
    body: [
      "Tokenization is the preprocessing step that converts raw text into the discrete units a language model consumes. A 'token' is rarely a whole word: sub-word tokenizers such as Byte-Pair Encoding (BPE), WordPiece and SentencePiece split text into frequent chunks like 'token', 'ization' and ' the', so that rare words can be assembled from common pieces and the vocabulary stays manageable (typically 32k–200k tokens). The same idea extends to images (patches), audio and video.",
      "Tokenization has practical consequences that users feel directly: context windows are measured in tokens, pricing is per token, and odd spellings or other scripts can inflate token counts. It also introduces subtle failure modes — models can be confused by unusual character patterns, and token-level compression differences explain why some languages 'cost' more than others. Recent research questions whether tokenization is even necessary, exploring byte-level and continuous models, but virtually all deployed systems still tokenize."
    ],
    tags: ["nlp", "preprocessing", "mechanics"],
    related: ["large-language-model", "embedding", "context-window"],
    sources: ["Sennrich, Haddow & Birch, 2016 — 'Neural Machine Translation of Rare Words with Subword Units'"],
    status: "core"
  },
  {
    id: "embeddings",
    name: "Embeddings",
    category: "concepts",
    tagline: "Turning words, images and data into vectors that capture meaning.",
    summary: "Dense numeric representations where similar things end up close together — the universal currency of modern AI systems.",
    body: [
      "An embedding is a mapping from a discrete item — a word, sentence, image, or user — to a vector of continuous numbers, such that semantically similar items land near each other in vector space. Classic word2vec (2013) showed that these vectors encode real structure: the classic example king − man + woman ≈ queen. Modern models compute contextual embeddings internally: each token's meaning depends on the surrounding words, which is why 'bank' by a river and 'bank' by an ATM occupy different regions of the space.",
      "Embeddings are the workhorse of retrieval and memory systems. Documents, chunks of text, images and queries are embedded and stored in vector databases, then compared by cosine similarity to find relevant content at runtime — the foundation of retrieval-augmented generation and semantic search. Embeddings also make it possible to cluster, deduplicate and classify content without ever seeing the raw text."
    ],
    tags: ["representation", "nlp", "retrieval"],
    related: ["vector-database", "retrieval-augmented-generation", "tokenization", "word2vec"],
    sources: ["Mikolov et al., 2013 — 'Efficient Estimation of Word Representations in Vector Space'"],
    status: "core"
  },
  {
    id: "large-language-model",
    name: "Large Language Model (LLM)",
    category: "concepts",
    year: 2018,
    tagline: "Transformer models trained on vast text corpora that generate and reason over language.",
    summary: "The category of model behind ChatGPT, Claude and Gemini: massive neural networks that predict text and, in doing so, acquire broad capability.",
    body: [
      "A large language model is a transformer-based neural network trained to predict the next token in a sequence over enormous quantities of text. The training objective is deceptively simple — next-token prediction — but the scale of data and parameters causes the model to absorb grammar, facts, reasoning patterns, and much of the shape of human knowledge. GPT-2 (2019) showed that these models could generate coherent text; GPT-3 (2020) showed that scale alone produced few-shot learning; ChatGPT (2022) showed the world what happens when one is aligned to chat.",
      "Modern LLMs are measured in tens to hundreds of billions of parameters (with sparse mixture-of-experts variants reaching trillions), trained on trillions of tokens, and extended with instruction tuning and reinforcement learning from human feedback to make them helpful and steerable. Their capabilities — writing code, solving math, summarizing documents, acting as agents — have turned the LLM into the default interface layer for new AI products, and made 'frontier model' a term in everyday conversation."
    ],
    tags: ["models", "nlp", "generative"],
    related: ["transformer", "gpt", "reinforcement-learning-from-human-feedback", "context-window", "hallucination"],
    sources: ["Brown et al., 2020 — 'Language Models are Few-Shot Learners'"],
    status: "core"
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    category: "concepts",
    year: 2022,
    tagline: "AI that creates — text, images, audio, video and code — rather than merely analyzing.",
    summary: "The umbrella term for systems that produce new content, powered by large language, diffusion and multimodal models.",
    body: [
      "Generative AI refers to systems that produce new content — text, images, music, speech, video, code — as opposed to systems that only classify, predict or retrieve. The current wave is driven by two architectures: transformers, which generate text and code token by token, and diffusion models, which generate images, audio and video by progressively denoising random noise into a coherent output. Earlier approaches like generative adversarial networks pioneered the idea but proved harder to scale and control.",
      "The category became a consumer phenomenon in 2022 with the launch of ChatGPT and Stable Diffusion, and it now spans tools like Midjourney, DALL·E, Sora, Suno and GitHub Copilot. Generative models are also production workhorses: summarizing documents, drafting code, augmenting datasets, synthesizing voices for accessibility, and generating training data itself. The same capability raises the hardest questions of the field — copyright, deepfakes, misinformation, and the line between creation and confabulation."
    ],
    tags: ["generative", "field", "creative"],
    related: ["diffusion-model", "large-language-model", "gan", "chatgpt", "stable-diffusion"],
    sources: ["—"],
    status: "core"
  },
  {
    id: "diffusion-model",
    name: "Diffusion Model",
    category: "concepts",
    year: 2020,
    tagline: "The generative technique behind modern image, video and audio synthesis.",
    summary: "Models trained to reverse a noise-corruption process, letting them generate photorealistic images from text prompts.",
    body: [
      "Diffusion models generate data by learning to reverse a gradual process of adding noise. During training, images are progressively corrupted with random noise; the model learns to predict and remove that noise at each step. At generation time, the model starts from pure noise and iteratively denoises it into a coherent image, guided by conditioning signals such as a text prompt. This 'learn to reverse the corruption' framing proved remarkably stable to train and produced images of unprecedented quality.",
      "The approach was formalized in 2015 (Sohl-Dickstein) and made practical with score-based and DDPM formulations in 2020, but it exploded into public consciousness with Stable Diffusion (2022), which brought latent diffusion to consumer hardware, and DALL·E 2, which aligned it with language understanding. Diffusion now powers image, video (Sora, Veo), music and speech generation, and shares the spotlight with autoregressive transformers as the two dominant generative paradigms — with hybrid architectures increasingly blending both."
    ],
    tags: ["architecture", "generative", "images"],
    related: ["stable-diffusion", "generative-ai", "gan", "dall-e"],
    sources: ["Ho, Jain & Abbeel, 2020 — 'Denoising Diffusion Probabilistic Models'; Rombach et al., 2022 — 'High-Resolution Image Synthesis with Latent Diffusion Models'"],
    status: "core"
  },
  {
    id: "gan",
    name: "Generative Adversarial Network (GAN)",
    category: "concepts",
    year: 2014,
    tagline: "Two neural networks — a generator and a discriminator — competing to produce realistic output.",
    summary: "The adversarial framework (Goodfellow et al., 2014) that first made machine-generated images convincing; now largely superseded by diffusion.",
    body: [
      "A generative adversarial network pits two networks against each other: a generator tries to produce data that looks real, while a discriminator tries to distinguish real data from the generator's fakes. The two are trained in a zero-sum loop, each forcing the other to improve. Invented by Ian Goodfellow and colleagues in 2014, GANs were the first technique to produce photorealistic faces and famously sharp images, and they powered the original 'deepfake' wave.",
      "GANs are notoriously difficult to train — the two networks can destabilize each other, collapse to boring outputs, or fail to converge — and in image generation they have largely been displaced by diffusion models, which are more stable and more controllable. GAN-style ideas live on in domain adaptation, style transfer, data augmentation and some audio and video applications, and the adversarial concept itself remains an important idea in both machine learning and AI safety research."
    ],
    tags: ["architecture", "generative", "adversarial"],
    related: ["diffusion-model", "generative-ai", "deepfake"],
    sources: ["Goodfellow et al., 2014 — 'Generative Adversarial Nets'"],
    status: "core"
  },
  {
    id: "reinforcement-learning",
    name: "Reinforcement Learning",
    category: "concepts",
    year: 1992,
    tagline: "Learning by trial and error from rewards, not from labeled examples.",
    summary: "The paradigm in which an agent learns a policy by maximizing cumulative reward — the engine behind AlphaGo, game AI and model training.",
    body: [
      "Reinforcement learning is the branch of machine learning in which an agent learns how to behave by interacting with an environment and receiving rewards or penalties, with no supervisor telling it the right answer. The agent must balance exploration (trying new actions) against exploitation (using what it knows), and the goal is to maximize cumulative reward over time. Its formal roots lie in dynamic programming and the theory of Markov decision processes, unified by Richard Sutton and Andrew Barto in their foundational 1998 textbook.",
      "RL achieved public triumph with AlphaGo (2016), which beat the world champion at Go using deep reinforcement learning plus tree search, and it remains the standard toolkit for robotics, game playing and real-time strategy. In the LLM era RL gained a second life: reinforcement learning from human feedback (RLHF) and its successors like RLVR (reinforcement learning with verifiable rewards) are what tune frontier models to be helpful, truthful and capable at reasoning — the 'thinking' phase of reasoning models is itself trained with RL."
    ],
    tags: ["paradigm", "agents", "training"],
    related: ["reinforcement-learning-from-human-feedback", "alphago", "agents", "machine-learning"],
    sources: ["Sutton & Barto, 1998 — 'Reinforcement Learning: An Introduction'"],
    status: "core"
  },
  {
    id: "reinforcement-learning-from-human-feedback",
    name: "Reinforcement Learning from Human Feedback (RLHF)",
    category: "concepts",
    year: 2020,
    tagline: "Aligning models with human preferences through reward models trained on human judgments.",
    summary: "The alignment technique behind ChatGPT and Claude: humans rank outputs, a reward model learns the ranking, and the policy is tuned to it.",
    body: [
      "Reinforcement learning from human feedback is the alignment method that turned raw language models into helpful assistants. After pretraining and supervised fine-tuning, the model generates multiple responses to prompts; human raters rank them from best to worst; a reward model is trained to predict those preferences; and the policy is then optimized against that reward model with reinforcement learning — typically with a KL penalty so it does not drift too far from the supervised model.",
      "RLHF, introduced by OpenAI's InstructGPT (2022) and Anthropic's concurrent work, is widely credited with making ChatGPT behave — following instructions, refusing harmful requests, and staying on-topic. The approach has evolved rapidly: constitutional AI and RLAIF substitute model-generated feedback for human ratings, and RLVR uses automatic verifiers (e.g., checking a math answer) instead of human preferences, which proved key to reasoning models. RLHF remains the canonical answer to the question 'how do you get a model to want what users want?'"
    ],
    tags: ["alignment", "training", "preferences"],
    related: ["alignment", "large-language-model", "reinforcement-learning", "instructgpt"],
    sources: ["Ouyang et al., 2022 — 'Training Language Models to Follow Instructions with Human Feedback'"],
    status: "core"
  },
  {
    id: "retrieval-augmented-generation",
    name: "Retrieval-Augmented Generation (RAG)",
    category: "concepts",
    year: 2020,
    tagline: "Grounding model answers in retrieved documents instead of relying on memory alone.",
    summary: "A pattern where a model first retrieves relevant context (often via embeddings and a vector database) and then generates an answer from it.",
    body: [
      "Retrieval-augmented generation is a design pattern for building trustworthy, up-to-date answers: before the model generates a response, a retrieval step finds the most relevant documents or facts — usually by embedding the query and searching a vector database — and the model is asked to answer based on that retrieved context. Introduced in 2020 by Lewis et al., the idea directly attacks the LLM's two chronic weaknesses: hallucination and stale knowledge.",
      "RAG is the default architecture for enterprise chatbots, internal knowledge bases, customer support and 'chat with your documents' products, because it lets the model cite sources and be updated by simply re-indexing a document store, with no retraining. Variants keep improving the pattern: hybrid search blends keyword and vector retrieval; rerankers refine the candidate set; and agentic RAG lets a model decide when and what to retrieve. The same idea — augmenting a model with external state — extends far beyond documents to databases, APIs and tools."
    ],
    tags: ["architecture", "retrieval", "grounding"],
    related: ["embeddings", "vector-database", "hallucination", "agents"],
    sources: ["Lewis et al., 2020 — 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks'"],
    status: "core"
  },
  {
    id: "fine-tuning",
    name: "Fine-tuning",
    category: "concepts",
    tagline: "Adapting a pretrained model to a new task or style with additional training.",
    summary: "Taking a general model and training it a little more on targeted data — the standard way to specialize models without training from scratch.",
    body: [
      "Fine-tuning is the practice of taking a model already pretrained on a huge corpus and training it further on a smaller, targeted dataset to adapt its behavior — making it answer in a company's tone, follow a document format, classify a niche domain, or refuse certain content. Because the expensive general knowledge is already in the weights, fine-tuning needs comparatively little data and compute. Instruction tuning (training on prompt–response pairs) is the step that turns pretrained models into assistants, and domain fine-tuning specializes them.",
      "The technique has become dramatically more accessible: parameter-efficient methods like LoRA freeze the original weights and train only small low-rank adapters, so a competent fine-tune can run on a single consumer GPU. Open-weight models have created an entire ecosystem of community fine-tunes — roleplay, coding, medical and legal variants — published on Hugging Face. The main caveat is data quality: a fine-tune faithfully inherits its training set's biases and mistakes, and small datasets can cause 'catastrophic forgetting' of the model's general abilities."
    ],
    tags: ["training", "adaptation", "efficiency"],
    related: ["lora", "large-language-model", "prompt-engineering", "hugging-face"],
    sources: ["Hu et al., 2021 — 'LoRA: Low-Rank Adaptation of Large Language Models'"],
    status: "core"
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    category: "concepts",
    tagline: "Crafting the instructions and context that steer a model's output.",
    summary: "The practice of designing inputs — instructions, examples, role frames, chains of thought — to get reliable, high-quality model behavior.",
    body: [
      "Prompt engineering is the discipline of designing the text that goes into a language model to get the behavior you want. Because LLMs are instruction-following systems with sharp sensitivity to wording, small changes — adding a role ('you are a senior reviewer'), giving examples (few-shot), requiring structured output, or asking the model to 'think step by step' — can meaningfully change quality and reliability. It is the cheapest and most portable form of model steering, requiring no training or infrastructure.",
      "The practice has evolved into a family of named techniques: chain-of-thought prompting elicits reasoning; self-consistency samples many chains and votes; few-shot prompting teaches by example; structured prompting and function calling force JSON or tool use; and meta-prompts (prompts that generate prompts) power much of automatic prompt optimization. As models have become stronger, prompt engineering has partly shifted from careful phrasing toward system design — orchestrating tools, retrieval and memory — but a well-built prompt remains the difference between a toy and a production system, and prompt-injection attacks show the same surface is also a security boundary."
    ],
    tags: ["technique", "llm usage", "interaction"],
    related: ["large-language-model", "chain-of-thought", "agents", "prompt-injection"],
    sources: ["Wei et al., 2022 — 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models'"],
    status: "core"
  },
  {
    id: "agents",
    name: "AI Agents",
    category: "concepts",
    year: 2024,
    tagline: "Models that don't just answer — they plan, use tools, and act on your behalf.",
    summary: "Agentic systems loop a model through reasoning, tool calls and environment feedback to accomplish multi-step tasks autonomously.",
    body: [
      "An AI agent is a system that uses a model as its decision-maker and loops it through perception–reasoning–action cycles: it observes input, plans a step, calls a tool (search, code execution, an API, a file system), observes the result, and repeats until the task is done. Unlike a chatbot that answers once, an agent acts over time toward a goal. The pattern became practical when models gained function calling and longer context, letting them hold state across many steps.",
      "The agentic stack is converging fast: the model provides reasoning; the Model Context Protocol (MCP) standardizes how it connects to tools; frameworks like LangGraph and OpenAI's Agents SDK orchestrate the loop; and 'computer use' and browser agents let models drive real interfaces. Agents are already writing and fixing code, booking and filling forms, analyzing documents and running research pipelines. Their hard problems are reliability (a wrong tool call can cascade), cost, safety (an autonomous system with real effects), and evaluation — proving an agent actually completes tasks, not just that its model can talk."
    ],
    tags: ["agents", "automation", "emerging"],
    related: ["model-context-protocol", "tool-use", "chain-of-thought", "langchain"],
    sources: ["—"],
    status: "emerging"
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    category: "concepts",
    tagline: "Teaching machines to see and interpret images and video.",
    summary: "The AI field behind face recognition, self-driving perception, medical imaging and image generation.",
    body: [
      "Computer vision is the field of making machines able to see — to classify, detect, segment, track and understand images and video. Classical vision used hand-crafted features like edges and corners; the modern era is defined by convolutional neural networks, which learned hierarchies of visual features directly from pixels, and vision transformers, which apply attention to image patches. Landmark systems include LeNet for digits, AlexNet's 2012 ImageNet breakthrough, and YOLO for real-time object detection.",
      "Vision is deeply embedded in daily life: face unlock, photo search, medical imaging triage, industrial inspection, autonomous-vehicle perception and augmented reality. Vision models also generate — diffusion models create images, and multimodal systems like GPT-4o and Gemini understand screenshots, diagrams and live video. Hard problems remain: robustness to lighting and occlusion, privacy, and avoiding bias in facial analysis, which has led to serious regulatory and ethical scrutiny of the field."
    ],
    tags: ["field", "vision", "perception"],
    related: ["convolutional-neural-network", "multimodal-ai", "alexnet", "computer-vision"],
    sources: ["LeCun et al., 1998 — 'Gradient-Based Learning Applied to Document Recognition'"],
    status: "core"
  },
  {
    id: "natural-language-processing",
    name: "Natural Language Processing (NLP)",
    category: "concepts",
    tagline: "The branch of AI that works with human language.",
    summary: "From rule-based parsers to transformer language models — how machines read, write, translate and understand text and speech.",
    body: [
      "Natural language processing is the branch of AI concerned with giving machines the ability to understand and generate human language: translation, sentiment, summarization, question answering, speech recognition and more. Its history runs from hand-written grammar rules and expert systems, through statistical models, to neural sequence models and finally transformers, which made language models the single most valuable artifact in AI. NLP is the field most responsible for AI's mainstream popularity, because language is the interface everyone already knows.",
      "Modern NLP is dominated by pretrained language models that are fine-tuned or prompted for almost any language task, collapsing what used to be many separate research problems into one: predict text well enough and most language tasks emerge. Speech models like Whisper, translation systems like DeepL, and multimodal assistants all sit on top of the same foundation. Open problems include reasoning over long documents, factuality, multilingual equity, and understanding in low-resource languages."
    ],
    tags: ["field", "language", "nlp"],
    related: ["large-language-model", "transformer", "tokenization", "speech-recognition"],
    sources: ["—"],
    status: "core"
  },
  {
    id: "multimodal-ai",
    name: "Multimodal AI",
    category: "concepts",
    year: 2023,
    tagline: "Models that understand and generate across text, images, audio and video.",
    summary: "Frontier systems like GPT-4o, Gemini and Claude now see, hear and speak — unifying modalities inside a single model.",
    body: [
      "Multimodal AI refers to systems that process and generate more than one modality — text, images, audio, video — within a single model. Early work concatenated separate encoders, but modern frontier models are natively multimodal: a vision encoder turns images into tokens that the same transformer processes as text tokens, and the model can answer questions about a photo, read a chart, transcribe speech or describe a video in one pass. These unified models inherit the generality of language models and extend it to the senses.",
      "The shift matters for both capability and interface: multimodal models make documents, screenshots, whiteboards and live camera feeds first-class inputs, powering everything from 'describe this bug from a screenshot' to hands-free assistants. Generation is also unifying — one model can output text, images, audio and, increasingly, video. The remaining frontiers are true long-horizon video understanding, robust audio in noise, and grounding — connecting what the model sees to what is really happening in the world rather than what the pixels merely suggest."
    ],
    tags: ["models", "modalities", "frontier"],
    related: ["large-language-model", "computer-vision", "gpt-4", "gemini"],
    sources: ["—"],
    status: "core"
  },
  {
    id: "mixture-of-experts",
    name: "Mixture of Experts (MoE)",
    category: "concepts",
    year: 2017,
    tagline: "Sparse architectures that activate only a fraction of the network per token.",
    summary: "The design that lets models reach trillion-parameter scale while keeping inference affordable — behind DeepSeek, Mixtral, Grok and Qwen.",
    body: [
      "A mixture-of-experts architecture replaces one dense network with many smaller 'expert' sub-networks plus a router that sends each input to only a few of them. Because only a slice of the parameters is active for any given token, MoE models get the capacity of a much larger network at a fraction of the compute cost per token. The concept dates to 1991 (Jacobs et al.), was revived with Sparsely-Gated MoE (Shazeer et al., 2017), and became a cornerstone of LLM scaling with Mixtral, Grok, Qwen-MoE and DeepSeek's trillion-parameter V3.",
      "The practical appeal is economics: an MoE model with a trillion total parameters may activate only ~37 billion per token, delivering quality approaching a much larger dense model while running on hardware that would never fit the dense version. MoE also enables cheaper serving and has contributed to dramatic inference-cost reductions. The trade-offs are engineering complexity — memory for all experts, routing balance — and the need for careful training so experts don't collapse into redundant copies."
    ],
    tags: ["architecture", "scaling", "efficiency"],
    related: ["deepseek", "large-language-model", "quantization", "mixtral"],
    sources: ["Shazeer et al., 2017 — 'Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer'"],
    status: "core"
  },
  {
    id: "quantization",
    name: "Quantization",
    category: "concepts",
    tagline: "Compressing models by lowering numeric precision — how huge models run on small hardware.",
    summary: "Representing weights in fewer bits (8-bit, 4-bit, 2-bit) to cut memory and speed up inference, often with minimal quality loss.",
    body: [
      "Quantization reduces the precision of a model's numbers — typically from 16-bit floats to 8-bit, 4-bit or even 2-bit integers — dramatically shrinking memory footprint and accelerating inference. A 70-billion-parameter model at 16-bit needs ~140GB of memory; at 4-bit it fits in ~35GB, which is why quantization is the key that unlocked running frontier-class models on consumer GPUs, Macs and even phones. Post-training quantization is almost free; quantization-aware training and techniques like GPTQ, AWQ and GGUF/llama.cpp's k-quants fine-tune the conversion for better quality.",
      "Quantization is the invisible enabler of the local-AI movement: essentially every model served on Ollama, LM Studio and llama.cpp runs quantized. The trade-off is a small, usually acceptable quality loss plus occasional sharp degradations on tricky tokens, and extremely aggressive 2-bit quantizations are mainly useful for experimentation. The same idea applies to activations and to KV caches, and there is active research into extreme compression, ternary models and making quantization quality loss vanish entirely."
    ],
    tags: ["efficiency", "inference", "local ai"],
    related: ["inference", "llama-cpp", "ollama", "mixture-of-experts"],
    sources: ["Dettmers et al., 2022 — 'GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers'"],
    status: "core"
  },
  {
    id: "hallucination",
    name: "Hallucination",
    category: "concepts",
    tagline: "When a model confidently states something that isn't true.",
    summary: "The tendency of generative models to fabricate fluent falsehoods — the defining reliability problem of the LLM era.",
    body: [
      "A hallucination is a model output that is fluent, confident and wrong — a citation that doesn't exist, a 'fact' that was never in the training data, a plausible-looking bug in code that was never tested. Hallucination is not a bug in the usual sense but a structural consequence of how LLMs work: they predict plausible continuations, not verified truths, and their training objective rewards linguistic fluency, not factual accuracy. It appears in every generative modality — text, images (extra fingers, wrong anatomy), audio and video.",
      "The field attacks hallucination on many fronts: retrieval-augmented generation grounds answers in sources; prompting asks the model to say 'I don't know'; decoding-time interventions and confidence scoring flag uncertain outputs; fine-tuning on verified data reduces fabrication; and post-hoc verification checks claims against search and tools. The fundamental mitigation is architectural — models that can look things up and defer to evidence. Hallucination remains the single most important obstacle to high-stakes deployment in medicine, law and finance, and it is the reason citation and verification are now standard features of serious AI products."
    ],
    tags: ["reliability", "risk", "llm behavior"],
    related: ["retrieval-augmented-generation", "large-language-model", "alignment", "ai-safety"],
    sources: ["—"],
    status: "core"
  },
  {
    id: "context-window",
    name: "Context Window",
    category: "concepts",
    tagline: "How much text a model can 'see' at once.",
    summary: "The token limit on a model's working memory — from 2k tokens in GPT-2 to millions in modern long-context systems.",
    body: [
      "The context window is the maximum number of tokens a model can consider when producing an output — its working memory. Early models could see only a few thousand tokens; GPT-3 offered 2,048. The race has been relentless: 128k, 200k, 1 million (Gemini 1.5), and experimental windows of 10 million+ tokens. Longer context lets models digest entire codebases, books, meeting transcripts and long documents, changing product design: instead of fine-tuning for a domain, you can often just paste the domain into the prompt.",
      "Long context has real costs and caveats. Attention scales quadratically with sequence length, so memory and latency grow fast; KV-cache management and sparse attention are active research areas. Quality also degrades in the middle of very long inputs ('lost in the middle'), and models can still miss details in a million-token haystack. The practical craft of prompt design — summarizing, chunking, retrieval — exists largely to work around context economics, and RAG remains cheaper than ever-larger windows for most real workloads."
    ],
    tags: ["mechanics", "llm", "scaling"],
    related: ["large-language-model", "retrieval-augmented-generation", "attention-mechanism", "kv-cache"],
    sources: ["—"],
    status: "core"
  }
  ,
  { id: "agi", name: "Artificial General Intelligence", category: "concepts", year: 1997, tagline: "The hypothetical moment machines match human intelligence — everywhere at once.", summary: "AGI is the field's north star and its most contested concept: a machine that can learn and perform any intellectual task a human can, versus the narrow 'ANI' systems that exist today.", body: [
    "Artificial General Intelligence (AGI) names the goal and the ghost of the field: a system with human-level (or beyond) ability to reason, learn, plan and adapt across every domain — as opposed to the 'narrow' AI that dominates today, each model brilliant at its specialty and helpless outside it. The term entered common usage via Mark Gubrud (1997) and was popularized by AGI researchers like Ben Goertzel; the concept itself is Turing's 1950 question revived with engineering confidence. The disagreement is not about the definition so much as the distance: 'it's coming in 5 years' to 'it's impossible, we're building the wrong thing'.",
    "The AGI debate is the field's most consequential philosophical argument because everything else hangs on it: if AGI is near, alignment is the most urgent problem in human history; if it is decades away or impossible, the existential-risk discourse is a distraction from present harms. The empirical record is mixed — scaling has produced startling general capability (reasoning, tool use, multimodal understanding), yet models still fail at basic robustness, world models and sustained autonomy. Every frontier lab now publishes AGI timelines; none can defend them."
  ], tags: ["frontier", "goal", "debate"], related: ["artificial-intelligence", "alignment", "ai-safety", "large-language-model"], sources: ["Gubrud, 1997; Bostrom, 2014 — 'Superintelligence'; Russell, 2019 — 'Human Compatible'"], status: "core" },
  { id: "backpropagation", name: "Backpropagation", category: "concepts", year: 1986, tagline: "The learning rule behind every modern neural network.", summary: "The algorithm that computes how each weight contributed to an error and adjusts it — the mathematical engine that makes deep learning possible.", body: [
    "Backpropagation ('backprop') is the algorithm that trains neural networks: it computes, layer by layer from the output backward, how much each weight contributed to the network's error, then nudges those weights in the direction that reduces it. The technique chains the chain rule of calculus through the network's layers — an error propagates backward through the same connections used for forward prediction, earning its name. Its modern form was published by Rumelhart, Hinton and Williams in 1986 (with precursors by Werbos, 1974, and others), and it remains the engine of essentially all deep learning.",
    "Backprop's history is a lesson in the field's cycles: celebrated in the 1980s, blamed when the second AI winter hit, and vindicated beyond doubt when AlexNet (2012) used it to win ImageNet. Its elegance hides a modern cost problem — the backward pass doubles the memory and compute of training — which is why every frontier technique (mixed precision, gradient checkpointing, distributed training) exists largely to make backprop affordable at scale. Whether biology implements backprop is an open question; whether the algorithm can be replaced is one of the field's quietest and most consequential bets."
  ], tags: ["training", "algorithm", "deep learning"], related: ["deep-learning", "neural-network", "gradient-descent"], sources: ["Rumelhart, Hinton & Williams, 1986 — 'Learning representations by back-propagating errors'"], status: "core" },
  { id: "convolutional-neural-network", name: "Convolutional Neural Network", category: "concepts", year: 1998, tagline: "The architecture that gave machines sight.", summary: "CNNs use sliding filters that detect local patterns — edges, textures, objects — to process images, the deep-learning architecture that conquered computer vision.", body: [
    "A convolutional neural network (CNN) is a neural-network architecture built for spatial data: instead of connecting every neuron to every input, it slides small learned filters across an image, each filter detecting a local pattern (an edge, a texture, an eye) and building hierarchical representations as layers stack — the famous 'pixels to edges to parts to objects' pipeline. The design, inspired by Hubel and Wiesel's 1960s vision neuroscience, was perfected by Yann LeCun in LeNet-5 (1998) for reading checks, and proved its power when AlexNet (2012) won ImageNet by a landslide.",
    "CNNs defined deep learning's first decade and remain the default for image processing: every phone camera, medical scanner and autonomous vehicle perception stack runs on convolutional layers. Their inductive bias — translation invariance, local connectivity — is why they learn vision with far less data than fully connected networks. Since 2020 they have been challenged by vision transformers (ViT), which apply attention to image patches and now lead the frontier; but the CNN's ideas (local receptive fields, feature hierarchies, pooling) are so embedded in the field that they persist inside almost every modern vision system."
  ], tags: ["vision", "architecture", "deep learning"], related: ["computer-vision", "lenet", "alexnet", "deep-learning"], sources: ["LeCun et al., 1998 — 'Gradient-Based Learning Applied to Document Recognition'; Krizhevsky et al., 2012 — AlexNet"], status: "core" },
  { id: "expert-systems", name: "Expert Systems", category: "concepts", year: 1970, tagline: "The first AI product — and the cautionary tale of its first bubble.", summary: "Rule-based programs that encoded human expertise into if-then knowledge bases: the commercial AI of the 1980s, and the technology that built — and burst — the second AI boom.", body: [
    "Expert systems were the first commercially successful AI: programs that captured a domain expert's knowledge as explicit if-then rules in a knowledge base, reasoned over it with an inference engine, and answered questions like 'what is this patient's infection?' The pattern was established by DENDRAL (1965) and MYCIN (1976, bacterial diagnosis) at Stanford, and industrialised by XCON (1980, DEC's computer configuration), which saved millions. By the mid-1980s, 'knowledge engineering' was a profession, LISP machines were a product category, and every consultancy promised an expert system.",
    "The collapse was as instructive as the rise: systems were brittle (they broke at the edges of their rule sets), expensive to maintain (every new rule needed a knowledge engineer), and opaque in ways that still echo — their 'explanation' was just the rule chain. The expert-systems bust of 1987–93 triggered the second AI winter and taught the field that hand-coded knowledge doesn't scale; statistical learning does. Yet their legacy survives: decision-tree models, business-rule engines, and the very idea that AI could be a product — all born from the knowledge-based systems that first made AI pay."
  ], tags: ["history", "rules", "knowledge"], related: ["artificial-intelligence", "machine-learning", "ai-winter"], sources: ["Buchanan & Shortliffe, 1984 — 'Rule-Based Expert Systems'; Feigenbaum, 1977 — 'The Art of Artificial Intelligence'"], status: "historical" },
  { id: "vector-database", name: "Vector Database", category: "concepts", year: 2019, tagline: "The memory of the RAG era.", summary: "A database specialized for storing and searching embeddings by similarity — the infrastructure behind semantic search, recommendations and retrieval-augmented generation.", body: [
    "A vector database stores embeddings — the dense numerical vectors that represent text, images and other data by meaning — and answers similarity queries: 'which stored vectors are closest to this query vector?', usually by approximate nearest-neighbor search over metrics like cosine distance. The idea predates the LLM boom (FAISS, 2017; Annoy, 2015), but vector databases became a product category in 2019–23 (Pinecone, Weaviate, Qdrant, Milvus, pgvector) because one application made them essential: retrieval-augmented generation, where an LLM's answer must be grounded in documents fetched by semantic similarity.",
    "Vector databases are the plumbing of the modern AI stack: every RAG pipeline, semantic search box, recommendation engine and AI agent memory system reads and writes embeddings through one. The engineering is subtle — ANN indexes (HNSW, IVF), hybrid keyword+vector search, filtering, and freshness all matter at scale — and the field now debates whether you need a dedicated database at all (SQLite-vec, Postgres extensions and in-memory libraries handle many workloads). As agents grow, vector stores are becoming their long-term memory: the difference between a chatbot and a system that remembers."
  ], tags: ["retrieval", "embeddings", "rag"], related: ["retrieval-augmented-generation", "embeddings", "agent", "large-language-model"], sources: ["Johnson et al., 2017 — FAISS; Pinecone/Qdrant, 2019–2023"], status: "core" },
  { id: "chain-of-thought", name: "Chain-of-Thought Prompting", category: "concepts", year: 2022, tagline: "'Think step by step' — the prompt that unlocked reasoning.", summary: "Prompting a model to reason in intermediate steps dramatically improves multi-step problem solving — the technique behind the entire reasoning-model era.", body: [
    "Chain-of-thought (CoT) prompting is the discovery that asking a language model to 'think step by step' — to produce intermediate reasoning before its final answer — dramatically improves performance on arithmetic, logic and multi-step problems that defeat direct answers. Published by Google researchers (Wei et al.) in 2022, it was startling because it needed no retraining: a prompt template unlocked capabilities that were apparently latent in the model. Follow-ups showed the reasoning must be explicit and visible ('let's think step by step'), and that prompting the model to first produce a plan works best.",
    "CoT is the hinge between the pre-reasoning and post-reasoning eras. Its insight — that models reason better when given room to reason — was industrialised as 'reasoning models' (OpenAI's o1/o3, DeepMind's Gemini thinking, DeepSeek-R1) that generate long internal chains of thought before answering, trained with reinforcement learning to reason well. The technique also spawned the era's controversies: chain-of-thought is the model's private reasoning, which labs now hide ('hidden CoT'), raising safety and transparency debates; and it reframed the interpretability question — we can read the reasoning, but is it the cause of the answer or a post-hoc rationalization? Either way, 'think step by step' may be the most consequential prompt ever written."
  ], tags: ["reasoning", "prompting", "llm"], related: ["prompt-engineering", "large-language-model", "o1-reasoning", "interpretability"], sources: ["Wei et al., 2022 — 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models'; Kojima et al., 2022 — 'Large Language Models are Zero-Shot Reasoners'"], status: "core" },
  { id: "few-shot-learning", name: "Few-Shot Learning", category: "concepts", year: 2020, tagline: "Learning a task from a handful of examples — in-context, with no weight updates.", summary: "The GPT-3 discovery that language models can pick up new tasks from just a few demonstrations in the prompt, defining the modern prompting paradigm.", body: [
    "Few-shot learning in modern AI means teaching a large model a task by giving it a few examples inside the prompt — no retraining, no fine-tuning, no weight changes. GPT-3's landmark 2020 result showed that a sufficiently large language model could perform new tasks — translation, arithmetic, classification — from a handful of demonstrations, a capability dubbed in-context learning. Zero-shot (no examples, just instructions) and one-shot (a single example) are the same mechanism at different sample counts.",
    "Few-shot prompting became the default interaction pattern of the LLM era: it powers prompt engineering, retrieval-augmented generation, and agentic tool selection, and it is the reason 'prompting' became a discipline. The mechanism is still not fully understood — it appears the model performs implicit gradient-like updates on its attention during the context window — and its limits (example order sensitivity, poor reliability on genuinely novel tasks) are the frontier of current research. Few-shot learning is why the 'no-code' dream of AI died: the code is the prompt."
  ], tags: ["prompting", "in-context learning", "llm"], related: ["prompt-engineering", "in-context-learning", "large-language-model", "gpt"], sources: ["Brown et al., 2020 — 'Language Models are Few-Shot Learners'"], status: "core" },
  { id: "world-model", name: "World Model", category: "concepts", year: 2018, tagline: "An internal simulation of how the world behaves — the route to grounded intelligence.", summary: "A learned model of the environment's dynamics that lets an agent imagine outcomes before acting — central to RL agents, video generation and Yann LeCun's bet on the future of AI.", body: [
    "A world model is a learned internal representation of how the world works — a compressed simulation an agent can 'run' in its head to predict what happens next. In reinforcement learning, model-based agents (World Models by Ha and Schmidhuber, 2018; Dreamer; MuZero) learn the environment's dynamics and then plan by imagining rollouts, learning dramatically more sample-efficiently than purely reactive agents. The idea is that prediction is the universal training signal: any sensory stream, from video to robot telemetry, provides it.",
    "World models have become the most contested front in AI's architecture debate. Yann LeCun argues they are the missing piece that will make AI genuinely intelligent — grounding systems in the physical world rather than in text alone — while others see video-generation models like Sora as proto-world-models that learned physics without being told it exists. Critics counter that pixel prediction is a poor proxy for causal understanding. Whichever side wins, the question 'can a model that predicts be said to understand?' is the deepest argument in AI right now."
  ], tags: ["reinforcement learning", "prediction", "theory"], related: ["reinforcement-learning", "sora", "robotics", "yann-lecun"], sources: ["Ha & Schmidhuber, 2018 — 'World Models'; Schrittwieser et al., 2020 — 'Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model'"], status: "core" },
  { id: "knowledge-distillation", name: "Knowledge Distillation", category: "concepts", year: 2015, tagline: "Teaching a small model by copying a large one's behavior.", summary: "A compression technique where a small 'student' model learns to mimic a large 'teacher' — the quiet engine behind efficient small models like Gemma, DistilBERT and Phi.", body: [
    "Knowledge distillation, popularized by Hinton, Vinyals and Dean in 2015, transfers the behavior of a large trained model into a much smaller one: the student is trained not on raw labels but on the teacher's soft output probabilities, which encode the teacher's 'dark knowledge' about how classes relate. The student typically reaches 90-99% of the teacher's quality at a fraction of the size and inference cost — which is why nearly every efficient small model in production (DistilBERT, Gemma, many mobile models) is a distilled model.",
    "Distillation has expanded far beyond its original scope: self-distillation (a model training itself), ensemble distillation, and — in the LLM era — using frontier models to label data for training smaller open models, a practice at the heart of the open-weights boom and the 'model reproduction' debates (DeepSeek's efficiency was partly attributed to distillation from closed models). It is the field's quietest superpower: most of the AI you actually use on your phone is a distilled ghost of something much larger."
  ], tags: ["efficiency", "compression", "small models"], related: ["quantization", "fine-tuning", "gemma", "phi"], sources: ["Hinton, Vinyals & Dean, 2015 — 'Distilling the Knowledge in a Neural Network'"], status: "core" },
  { id: "self-supervised-learning", name: "Self-Supervised Learning", category: "concepts", year: 2018, tagline: "Learning from data that labels itself — the reason AI scales.", summary: "The paradigm where models generate their own training labels from raw data (predict the next word, the masked patch, the future frame) — the engine behind BERT, GPT and nearly all modern AI.", body: [
    "Self-supervised learning is the dominant learning paradigm of the modern era: instead of requiring humans to label data, the model creates its own supervisory signal from the data's structure — predict the next token, reconstruct a masked patch, predict the next video frame. This is what made scaling possible, because unlabeled data (the entire internet, every image ever uploaded) is effectively free. BERT's masked-language modeling (2018) and GPT's next-token prediction are both self-supervised objectives; so are contrastive vision methods like SimCLR and CLIP.",
    "The paradigm's rise explains the field's geography: no self-supervision, no foundation models, no ChatGPT. Its limits are equally defining — self-supervised models learn statistical regularities, not causal understanding, and they inherit every bias in their unlabeled corpora. Researchers now debate whether richer self-supervised objectives (video prediction, world models) can push past these limits toward something closer to human-like learning, which itself is substantially self-supervised: babies mostly learn from unlabeled experience."
  ], tags: ["pretraining", "scaling", "foundations"], related: ["bert", "gpt", "transformer", "world-model"], sources: ["Devlin et al., 2018 — BERT; Radford et al., 2018 — GPT-1; Chen et al., 2020 — SimCLR"], status: "core" },
  { id: "transfer-learning", name: "Transfer Learning", category: "concepts", year: 2014, tagline: "Reusing knowledge from one task to solve another — pretrain once, adapt everywhere.", summary: "The practice of taking a model trained on a broad source task and adapting it to new tasks with far less data — the core economic insight of the foundation-model era.", body: [
    "Transfer learning means applying knowledge gained on one task to a different but related one. In deep learning it took its modern form with ImageNet-pretrained models: a CNN trained to classify a million images could be fine-tuned for medical imaging or satellite analysis with a fraction of the data, because its lower layers had already learned general features like edges and textures. With BERT (2018) and GPT (2018), transfer learning became the entire business model of NLP: pretrain one massive model on unlabeled text, then fine-tune or prompt it for any downstream task.",
    "Transfer learning is the reason the frontier behaves the way it does: a single pretrained foundation model powers thousands of applications, which is why labs compete to build one and why access to the best weights is the industry's most contested resource. Its limits show in the 'transfer gap' — knowledge transfers well within a modality and language, poorly across them — and in the risk that pretraining bakes in biases that then spread to every downstream use. 'Pretrain, then adapt' is the template of the entire modern AI economy."
  ], tags: ["pretraining", "fine-tuning", "foundation models"], related: ["fine-tuning", "self-supervised-learning", "bert", "gpt"], sources: ["Yosinski et al., 2014 — 'How transferable are features in deep neural networks?'"], status: "core" },
  { id: "in-context-learning", name: "In-Context Learning", category: "concepts", year: 2020, tagline: "Learning a task from the examples in your prompt — no training required.", summary: "The capacity of large language models to acquire new abilities purely from demonstrations in the context window — the phenomenon that makes few-shot prompting work.", body: [
    "In-context learning is the mechanism behind few-shot prompting: a sufficiently large language model can perform a task it was never trained for by being shown examples inside its context window, with no weight updates at all. Discovered with GPT-3 (2020), it turned 'learning' into something a user can do at query time — paste a few labeled examples and the model extrapolates the pattern. The name deliberately parallels human in-context learning: adaptation without changing the underlying system.",
    "Why it works is still debated — one leading hypothesis is that in-context learning is an implicit gradient-descent process unfolding inside the attention computations — and its reliability is uneven: models are sensitive to example order, formatting and example choice. But its practical importance is absolute: it is what makes prompt engineering, RAG demonstrations and agentic tool selection work, and it is the reason the industry's interface became a text box rather than a training pipeline."
  ], tags: ["prompting", "llm", "emergent"], related: ["few-shot-learning", "prompt-engineering", "gpt", "large-language-model"], sources: ["Brown et al., 2020 — 'Language Models are Few-Shot Learners'; von Oswald et al., 2023 — 'Transformers learn in-context by gradient descent'"], status: "core" },
  { id: "compute", name: "Compute", category: "concepts", year: 2023, tagline: "The real currency of AI — the chips, energy and money that make models happen.", summary: "The hardware capacity (FLOPs, GPUs, energy) required to train and run AI systems — the scarce resource that now decides who can build frontier models and what they can do.", body: [
    "Compute is the raw capacity to do calculations — measured in FLOPs and delivered by GPUs, TPUs and specialized accelerators — and it has become AI's binding constraint. Training a frontier model requires tens of thousands of GPUs running for months and electricity measured in gigawatt-hours; inference consumes similar resources at scale. The economic history of modern AI is largely a history of compute: scaling laws say capability grows with compute, so whoever has the most hardware wins the race.",
    "Compute's centrality created the industry's geography: data-center construction, chip supply chains and energy contracts are now strategic assets, and export controls on advanced chips became geopolitics. It also defines the field's internal inequalities — frontier training is closed to all but a handful of labs and nations — and its environmental cost is under scrutiny as AI's energy footprint grows. Every debate about AI's future — open versus closed, safety, cost, who gets to build — reduces, at bottom, to the question of compute."
  ], tags: ["compute", "gpus", "economics"], related: ["cuda", "nvidia", "deep-learning", "coreweave"], sources: ["Kaplan et al., 2020 — Scaling Laws; Epoch AI, 2023–2025 — compute estimates"], status: "core" },
  { id: "test-time-compute", name: "Test-Time Compute", category: "concepts", year: 2024, tagline: "Spending more thinking at inference — the trick that made reasoning models reason.", summary: "Inference-time scaling: giving a model more tokens and compute to think before answering — the mechanism behind o1, DeepSeek-R1 and the reasoning-model era.", body: [
    "Test-time compute (also called inference-time scaling) is the practice of spending more computation when a model answers, not when it trains: letting it generate long chains of thought, search over candidate answers, verify its own work, or use tools — and improving in quality the longer it thinks. The 2024 insight, formalized by Snell et al. and demonstrated by OpenAI's o1, was that this creates a second scaling axis: just as more training compute buys capability, more thinking compute buys correctness, and the two can be traded against each other. A small model that thinks for a minute can outperform a much larger model that answers instantly.",
    "The concept redrew the economics of AI: frontier labs could push benchmark scores by spending on inference instead of retraining, 'thinking mode' became a product toggle, and open-weight labs like DeepSeek showed test-time scaling could be replicated at a fraction of frontier cost. It also sharpened hard questions — hidden chain-of-thought that cannot be audited, energy costs that grow with every query, and whether spending more compute on reasoning is a path to capability or merely to longer rationalizations."
  ], tags: ["reasoning", "inference", "scaling"], related: ["o1-reasoning", "deepseek", "chain-of-thought", "compute", "reinforcement-learning"], sources: ["Snell et al., 2024 — 'Scaling LLM Test-Time Compute Optimally is More Effective than Scaling Model Parameters'"], status: "core" },
  { id: "synthetic-data", name: "Synthetic Data", category: "concepts", year: 2017, tagline: "Training data generated by machines — the quiet fuel of the data-scarce era.", summary: "Data produced by models rather than collected from the world — used to train, fine-tune and evaluate AI, and now a multi-billion-dollar industry.", body: [
    "Synthetic data is training or evaluation data generated algorithmically — by models, simulators or procedural rules — rather than collected from human activity. The idea is old (image simulators, bootstrapped language models), but it became central to the LLM era for two reasons: the internet's high-quality text is being exhausted, and frontier models are increasingly the best generators of the examples smaller models need. Microsoft's Phi series showed small models trained mostly on synthetic 'textbook' data can reason surprisingly well, and DeepSeek's success was partly attributed to synthetic training from stronger models.",
    "The field is divided on synthetic data: its champions see it as the path past the data wall — infinite, privacy-safe, perfectly labeled; its critics warn of model collapse, where models trained on their own output degrade into narrow, homogenized gibberish. The practical answer emerging is a blend — synthetic data for efficiency and coverage, real data for grounding and novelty. Either way, the question of whether AI can bootstrap itself on its own output is one of the defining bets of the next decade."
  ], tags: ["data", "training", "scaling"], related: ["phi", "fine-tuning", "data-privacy", "machine-learning"], sources: ["Gunasekar et al., 2023 — 'Textbooks Are All You Need'; Shumailov et al., 2023 — 'The Curse of Recursion'"], status: "core" }
];
