# Always beta - Refactored

개인 포트폴리오 웹사이트


### 1. **폴더 구조**
```
src/
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── ProjectDetail.tsx
├── components/         # 재사용 가능한 컴포넌트
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/
│       └── RobustImage.tsx
├── features/           # 기능별 컴포넌트
│   └── project/
│       └── ProjectCard.tsx
├── types/              # 타입 정의
│   ├── project.types.ts
│   └── nav.types.ts
├── data/               # 데이터 파일
│   └── projects.ts
└── utils/              # 유틸리티 함수
    └── imageHelper.ts
```

### 2. **코드 개선**
- 중복 코드 제거 (카테고리 아이콘 매핑)
- 타입 정의 분리 및 중앙 관리
- 컴포넌트 역할 명확화

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 새 프로젝트 추가 방법

1. `public/projects/[카테고리]/[프로젝트ID]/` 폴더 생성
2. 이미지 파일 추가
3. `src/data/projects.ts`에 프로젝트 정보 추가

```typescript
{
  id: 'my-project',
  category: 'robotics',
  title: 'My New Project',
  description: 'Short description',
  image: 'main.jpg',  // public/projects/robotics/my-project/main.jpg
  tags: ['ROS2', 'Python'],
  date: '2024. 01. 15',
}
```

## 라우트

- `/` - 홈페이지
- `/about` - 소개
- `/projects` - 프로젝트 목록
- `/projects?category=robotics` - 카테고리별 필터링
- `/projects/:id` - 프로젝트 상세

## 주요 기술 스택

- React 18
- TypeScript
- React Router DOM 6
- Tailwind CSS
- Vite
