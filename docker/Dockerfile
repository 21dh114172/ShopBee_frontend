
ARG NODE_VERSION=20.14

ARG ALPINE_VERSION=3.19


#############################################################
# Stage 1 - App extraction / pruning                        #
#############################################################



FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS app-builder


RUN apk add --no-cache git jq

RUN npm install -g pnpm --force



WORKDIR /app



COPY --link package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY --link apps/buyer ./apps/buyer

COPY --link apps/seller ./apps/seller

COPY --link apps/admin ./apps/admin

COPY --link packages ./packages



# Install dependencies for all apps



RUN pnpm install --filter @shopbee/buyer...

RUN pnpm install --filter @shopbee/seller...

RUN pnpm install --filter @shopbee/admin...



# Build all apps



RUN pnpm --filter @shopbee/buyer build

RUN pnpm --filter @shopbee/seller build

RUN pnpm --filter @shopbee/admin build



#############################################################

# Stage 2 - App runner                                      #

#############################################################



FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS app-runner



ARG BUYER_APP_PORT



ENV HOSTNAME=0.0.0.0

ENV PORT=${BUYER_APP_PORT:-3000}

ENV TZ=Asia/Ho_Chi_Minh



RUN apk add --no-cache tzdata bash



WORKDIR /app



RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 buyer



USER buyer



COPY --from=app-builder --chown=buyer:nodejs /app/apps/buyer/.next ./apps/buyer/.next

COPY --from=app-builder --chown=buyer:nodejs /app/apps/buyer/public ./apps/buyer/public

COPY --from=app-builder --chown=buyer:nodejs /app/apps/buyer/package.json ./apps/buyer/package.json

COPY --from=app-builder --chown=buyer:nodejs /app/apps/buyer/next.config.ts ./apps/buyer/next.config.ts



COPY --from=app-builder --chown=buyer:nodejs /app/apps/seller/.next ./apps/seller/.next

COPY --from=app-builder --chown=buyer:nodejs /app/apps/seller/public ./apps/seller/public

COPY --from=app-builder --chown=buyer:nodejs /app/apps/seller/package.json ./apps/seller/package.json

COPY --from=app-builder --chown=buyer:nodejs /app/apps/seller/next.config.ts ./apps/seller/next.config.ts



COPY --from=app-builder --chown=buyer:nodejs /app/apps/admin/.next ./apps/admin/.next

COPY --from=app-builder --chown=buyer:nodejs /app/apps/admin/public ./apps/admin/public

COPY --from=app-builder --chown=buyer:nodejs /app/apps/admin/package.json ./apps/admin/package.json

COPY --from=app-builder --chown=buyer:nodejs /app/apps/admin/next.config.ts ./apps/admin/next.config.ts



EXPOSE ${PORT}



CMD ["node", "apps/buyer/server.js"]