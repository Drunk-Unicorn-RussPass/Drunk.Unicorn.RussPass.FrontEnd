FROM node:20.10.0 as dependencies
WORKDIR /russpass-hack
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20.10.0 as builder
WORKDIR /russpass-hack
COPY . .
COPY --from=dependencies /russpass-hack/node_modules ./node_modules
RUN npm run build

FROM node:20.10.0 as runner
WORKDIR /russpass-hack
ENV NODE_ENV production

COPY --from=builder /russpass-hack/public ./public
COPY --from=builder /russpass-hack/package.json ./package.json
COPY --from=builder /russpass-hack/.next ./.next
COPY --from=builder /russpass-hack/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]