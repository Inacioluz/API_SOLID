# App

Gym Pass app.

## RFs (Requisitos funcinais)

- [ ] Deve ser possivel se cadastrar 
- [ ] Deve ser possivel se altenticar
- [ ] Deve ser possivel obter o perfil de um usuario logado
- [ ] Deve ser possivel ibter número de chech-ins realizado pelo usuario logado
- [ ] Deve ser possivel obter seu histórico de check-ins
- [ ] Deve ser possivel buscar academias próximas 
- [ ] Deve ser possivel o usuario buscar por academia pelo nome
- [ ] Deve ser possivel o usuario realizar check-in em uma academia
- [ ] Deve ser possivel validar o check-in de um usuario 
- [ ] Deve ser possivel cadastrar uma academia

## RNs (Regras de negocio)

- [ ] O usuario não deve consguir se cadastrar com um e-mail duplicado
- [ ] O usuario não pode fazer 2 check-in no mesmo dia
- [ ] O usuario não pode fazer check-in não estiver perto de (100m) da academia
- [ ] O check-in só pode ser validado em até 20 minutos após criado
- [ ] O check-in só pode ser validado por adiministradores
- [ ] A academia so pode ser cadastrada por adiministradores

## RNFs (Requisitos não funcionais)

- [ ] A senha do usuario precisa ser criptografada
- [ ] Os dados da aplicação precisa estar em um banco de dados PostgresSQL
- [ ] Todos lista a de dados precisam estar paginadas com 20 itens por página
- [ ] O usuario deve ser identificado pelo um JWT