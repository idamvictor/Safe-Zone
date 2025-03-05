interface User {
  id: string;
  username: string;
  full_name: string;
  image: string;
}

interface File {
  id: string;
  file: string;
  mime_type: string;
}

export interface Post {
  id: string;
  user_id: string;
  user: User;
  title: string;
  latitude: number;
  longitude: number;
  content: string;
  category: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  bookmarks_count: number;
  share_count: number;
  city: string;
  files: File[];
  category_type: string;
  distance: number;
  severity: string;
  user_liked: boolean;
  user_bookmarked: boolean;
}
