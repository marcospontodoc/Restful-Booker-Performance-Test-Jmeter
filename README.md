# 🚀 Testes de Performance - Restful Booker API

## 📌 Sobre o projeto

Este projeto tem como objetivo avaliar o desempenho da **Restful Booker API** por meio de testes de performance utilizando o **Apache JMeter**.

Foram desenvolvidos cenários para analisar o comportamento da aplicação sob diferentes níveis de carga, considerando indicadores como tempo de resposta, throughput e taxa de erros.

Os fluxos avaliados foram:

- Login (`POST /auth`)
- Criação de Reserva (`POST /booking`)
- Fluxo completo (Login + Reserva)

---

## 🛠 Tecnologias utilizadas

- Apache JMeter 5.6.3
- Java
- Restful Booker API

---

## 📂 Estrutura do projeto

```text
.
├── JMeter
│   └── RestfulBooker.jmx
│
├── Evidence
│   ├── Login
│   │   ├── 50-users
│   │   ├── 500-users
│   │   ├── 1000-users
│   │   └── 2000-users
│   │
│   ├── Reserva
│   │   ├── 50-users
│   │   ├── 500-users
│   │   ├── 1000-users
│   │   └── 2000-users
│   │
│   └── Login-Reserva
│       ├── 50-users
│       ├── 500-users
│       ├── 1000-users
│       └── 2000-users
│
└── README.md
```

---

## 📋 Cenários executados

Foram realizados testes de carga para os seguintes cenários:

- Login
- Reserva
- Login + Reserva

Cada cenário foi executado com:

- 50 usuários simultâneos
- 500 usuários simultâneos
- 1000 usuários simultâneos
- 2000 usuários simultâneos

### Configuração dos testes

- **Scheduler:** Habilitado
- **Duração:** 300 segundos
- **Loop:** Infinito durante o período de execução
- **Ramp-up:** 50 segundos para 50 usuários e 20 segundos para os demais cenários

---

## ▶️ Como abrir os testes

1. Instale o **Apache JMeter** (versão 5.6.3 ou superior).
2. Abra o JMeter.
3. Selecione **File > Open**.
4. Navegue até a pasta **JMeter**.
5. Abra o arquivo **restful-booker-performance.jmx**.

Todos os cenários estarão disponíveis para execução e edição.

---

## ▶️ Como executar um teste

1. Selecione o cenário desejado no painel do JMeter.
2. Caso necessário, ajuste os parâmetros do **Thread Group**.
3. Clique em **Start (▶)** ou acesse **Run > Start**.
4. Aguarde o término da execução.

---

## 📊 Evidências

A pasta **Evidence** contém todos os relatórios HTML gerados durante a execução dos testes.

Os relatórios estão organizados por **funcionalidade** e **quantidade de usuários**, conforme o exemplo abaixo:

```text
Evidence
├── Login
│   └── 500-users
│       ├── index.html
│       └── ...
│
├── Reserva
│   └── 1000-users
│       ├── index.html
│       └── ...
│
└── Login-Reserva
    └── 2000-users
        ├── index.html
        └── ...
```

Para visualizar um relatório, basta abrir o arquivo **index.html** da pasta correspondente em qualquer navegador.

---

## 📈 Resumo dos resultados

Os testes demonstraram que a aplicação apresentou bom desempenho nos cenários de **50** e **500 usuários simultâneos**, mantendo baixos tempos de resposta e reduzida taxa de erros.

A partir de **1000 usuários simultâneos**, observou-se aumento na latência e na quantidade de falhas. No cenário de **2000 usuários**, a degradação tornou-se mais evidente, indicando o limite de desempenho do ambiente testado.

---

