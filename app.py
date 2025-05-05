from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.agent.workflow import FunctionAgent
from llama_index.llms.openai import OpenAI
import asyncio
import os

# Load your OpenAI key
os.environ["OPENAI_API_KEY"] = ""

# Step 1: Load your knowledge files
documents = SimpleDirectoryReader("knowledge_base/").load_data()

# Step 2: Create your index (vector embeddings)
index = VectorStoreIndex.from_documents(documents)

# Step 3: Query your index
query_engine = index.as_query_engine()

response = query_engine.query("What projects has Fae built?")
print(response)