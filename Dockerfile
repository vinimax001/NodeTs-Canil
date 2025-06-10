# --- Stage 1: Build da Aplicação ---
FROM node:22-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala todas as dependências (incluindo as de desenvolvimento)
RUN npm install

# Copia o restante do código da aplicação (inclui a pasta public/ e src/)
COPY . .

# Executa o script de build para transpilar TypeScript e copiar os templates mustache
# Os arquivos JS estarão em 'dist/' e os templates em 'dist/views/'
RUN npm run build

# --- Stage 2: Imagem Final de Produção ---
FROM node:22-alpine AS production

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas package.json e package-lock.json para instalar as dependências de produção
COPY package*.json ./

# Instala as dependências de produção (excluindo as de desenvolvimento)
RUN npm install --omit=dev

# Copia os arquivos construídos (o diretório 'dist') do stage 'builder'
COPY --from=builder /app/dist ./dist

# --- NOVO: Copia a pasta 'public' do estágio builder para o estágio de produção ---
COPY --from=builder /app/public ./public

# Expõe a porta em que sua aplicação escuta
EXPOSE 3000

# Define o comando para iniciar a aplicação quando o container for executado
CMD ["npm", "start"]