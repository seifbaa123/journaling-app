FROM node

RUN useradd -ms /bin/bash user
USER user

WORKDIR /home/user

COPY package.json .
RUN npm install

COPY --chown=user:user . .

RUN npx prisma generate
RUN npm run build

CMD npm run preview
