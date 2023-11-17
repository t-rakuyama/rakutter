FROM node:18.18-slim as base

FROM base AS deps
WORKDIR /app

COPY app/package*.json ./
# FIXME only production
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ../../app .

RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/dist ./
# FIXME
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 5173

ENV PORT 5173

ENV HOSTNAME "0.0.0.0"

# FIXME
COPY app/package*.json ./

# FIXME
CMD ["npm", "run", "dev"]
