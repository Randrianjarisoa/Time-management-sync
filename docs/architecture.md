# Architecture de TimeSync

## Clean Architecture
- **Domain** : Entité `Task` (id, name, startTime, endTime, status, lastModified).
- **Use Cases** : Logique métier (ajouter, synchroniser).
- **Infrastructure** : SQLite (mobile), TypeORM (backend), API (NestJS).
- **Presentation** : UI (React Native, Next.js).

## SOLID
- **S** : Chaque classe a une seule responsabilité (ex. : `TaskService` gère les tâches, pas l’UI).
- **O** : Extensible (ex. : `Button` avec props `variant`).
- **L** : Interfaces cohérentes (ex. : `ITaskRepository`).
- **I** : Interfaces spécifiques (ex. : `ITaskService`).
- **D** : Injection de dépendances (ex. : NestJS DI).

## Diagramme UML
[À venir]