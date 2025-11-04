# Restaurante Reservas App (Minimal)

Mini-proyecto Node.js (ESM) con arquitectura hexagonal + bus de eventos en memoria.
Incluye:
- API HTTP (Express)
- Core (dominio)
- Repositorio en memoria
- EventBus en memoria (publica/consume eventos)
- Notificador simulado
- AsyncAPI (especificación de eventos)

## Instalar
```bash
npm install
cp .env.example .env
npm run start
