# 📋 Instruções de Manutenção do Portfólio

## 🏗️ Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── layout.tsx          # Layout principal com providers
│   │   └── page.tsx            # Página principal
│   │
│   ├── components/
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Navbar.tsx      # Navegação com menu mobile
│   │   │   └── Footer.tsx      # Rodapé
│   │   │
│   │   ├── sections/           # Seções da página
│   │   │   ├── Hero.tsx        # Seção inicial com foto
│   │   │   ├── About.tsx       # Sobre mim
│   │   │   ├── Skills.tsx      # Habilidades técnicas
│   │   │   ├── Education.tsx   # Formação acadêmica
│   │   │   ├── Experience.tsx  # Experiência profissional
│   │   │   ├── Projects.tsx    # Projetos
│   │   │   └── Contact.tsx     # Contatos
│   │   │
│   │   └── ui/                 # Componentes reutilizáveis
│   │       ├── Button.tsx      # Botões estilizados
│   │       ├── Card.tsx        # Cards com animação
│   │       ├── FloatingShapes.tsx  # Formas decorativas
│   │       ├── LanguageToggle.tsx  # Troca de idioma
│   │       ├── SectionTitle.tsx    # Títulos de seção
│   │       └── ThemeToggle.tsx     # Troca de tema
│   │
│   ├── contexts/               # Contextos React
│   │   ├── ThemeContext.tsx    # Gerenciamento de tema
│   │   └── LanguageContext.tsx # Gerenciamento de idioma
│   │
│   ├── data/                   # Dados estáticos
│   │   ├── translations.ts     # Textos PT-BR e EN
│   │   └── skills.ts           # Lista de skills
│   │
│   └── styles/
│       └── globals.css         # Estilos globais e Tailwind
│
├── public/
│   └── images/                 # Imagens (criar pasta)
│       └── profile.jpg         # Sua foto (adicionar)
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🔧 Guia de Manutenção

### 1. Adicionar Sua Foto

1. Coloque sua foto em `public/images/profile.jpg`
2. Edite `src/components/sections/Hero.tsx`
3. Descomente o componente `Image` e remova o placeholder

```tsx
// Em Hero.tsx, substitua o placeholder por:
<Image
  src="/images/profile.jpg"
  alt="Profile photo"
  fill
  className="object-cover"
  priority
/>
```

---

### 2. Atualizar Informações de Contato

Edite `src/components/sections/Contact.tsx`:

```tsx
const contacts = [
  {
    name: t.contact.email,
    href: 'mailto:SEU_EMAIL@exemplo.com',  // ← Seu email
    // ...
  },
  {
    name: t.contact.github,
    href: 'https://github.com/SEU_USUARIO',  // ← Seu GitHub
    // ...
  },
  {
    name: t.contact.linkedin,
    href: 'https://linkedin.com/in/SEU_USUARIO',  // ← Seu LinkedIn
    // ...
  },
];
```

---

### 3. Adicionar Links aos Projetos

Edite `src/data/translations.ts` na seção `projects.items`:

```ts
{
  title: 'Nome do Projeto',
  description: 'Descrição',
  tech: ['Tech1', 'Tech2'],
  link: 'https://seu-link.com',  // ← Adicione o link aqui
},
```

---

### 4. Adicionar Novas Skills

Edite `src/data/skills.ts`:

```ts
export const skills = {
  frontend: [
    'HTML',
    'CSS',
    // Adicione novas skills aqui
  ],
  // outras categorias...
};

// Adicione ícones correspondentes
export const skillIcons: Record<string, string> = {
  'Nova Skill': '🆕',  // ← Emoji ou ícone
};
```

---

### 5. Atualizar Textos (Português/Inglês)

Edite `src/data/translations.ts`:

- **Português**: Seção `'pt-BR'`
- **Inglês**: Seção `'en'`

Mantenha a mesma estrutura em ambos os idiomas!

---

### 6. Adicionar Nova Experiência ou Formação

Para adicionar mais experiências, edite `src/components/sections/Experience.tsx` e duplique o bloco de card existente.

Para adicionar mais formações, faça o mesmo em `src/components/sections/Education.tsx`.

---

### 7. Personalizar Cores

Edite `tailwind.config.js` na seção `colors`:

```js
colors: {
  primary: {
    500: '#6366f1',  // Cor principal
    // ...
  },
  accent: {
    500: '#d946ef',  // Cor de destaque
    // ...
  },
}
```

---

### 8. Alterar Fontes

1. Edite `src/styles/globals.css` - altere o import do Google Fonts
2. Atualize `tailwind.config.js` na seção `fontFamily`

---

## 📦 Dependências Principais

| Pacote | Versão | Função |
|--------|--------|--------|
| next | 14.x | Framework React |
| react | 18.x | Biblioteca UI |
| framer-motion | 10.x | Animações |
| lucide-react | 0.3x | Ícones |
| tailwindcss | 3.x | Estilização |
| typescript | 5.x | Tipagem |

---

## 🚀 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificar erros de lint
npm run lint

# Iniciar produção
npm start
```

---

## 📝 Checklist de Personalização

- [ ] Adicionar foto de perfil
- [ ] Atualizar email de contato
- [ ] Atualizar link do GitHub
- [ ] Atualizar link do LinkedIn
- [ ] Adicionar links dos projetos
- [ ] Revisar textos em português
- [ ] Revisar textos em inglês
- [ ] Personalizar cores (opcional)
- [ ] Atualizar metadata SEO em `layout.tsx`
- [ ] Deploy na Vercel

---

## 🎨 Dicas de Design

1. **Fotos**: Use imagens quadradas para o perfil (recomendado: 400x400px ou maior)
2. **Cores**: Mantenha consistência entre tema claro e escuro
3. **Textos**: Seja conciso e direto
4. **Links**: Sempre teste se estão funcionando

---

## 🐛 Resolução de Problemas

### Erro de Hydration
Se aparecer erro de hydration, verifique se está usando `'use client'` nos componentes que usam hooks.

### Estilos não aplicando
Execute `npm run dev` novamente ou delete a pasta `.next` e reinicie.

### Imagens não carregando
Verifique se o caminho está correto: `/images/nome-do-arquivo.extensao`

---

## 📞 Estrutura para Adicionar Novos Contatos

Se quiser adicionar mais formas de contato (WhatsApp, Twitter, etc.):

1. Edite `src/components/sections/Contact.tsx`
2. Adicione ao array `contacts`:

```tsx
{
  name: 'WhatsApp',
  icon: <Phone className="w-6 h-6" />,  // Importe o ícone
  href: 'https://wa.me/SEUNUMERO',
  color: 'from-green-500 to-green-600',
  hoverColor: 'hover:border-green-500',
},
```

3. Adicione a tradução em `translations.ts` se necessário

---

## 🔄 Atualizações Futuras

Para atualizar as dependências:

```bash
# Verificar atualizações
npm outdated

# Atualizar pacotes
npm update

# Atualizar para versões major (cuidado!)
npx npm-check-updates -u
npm install
```

---

**Última atualização**: Dezembro 2024

Feito com ❤️ para facilitar a manutenção do seu portfólio!
