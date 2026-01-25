// mockData.js

export const mockData = {
    // 1. Phần Khóa học / Đề thi (IELTS Simulation)
    khocHocs: [
        {
            id: 1,
            title: "IELTS Simulation Listening Test 1",
            description: "Thời gian làm bài: 40 phút | 4 phần thi | 40 câu hỏi",
            duration: "40 phút",
            status: "Sẵn sàng để bắt đầu làm test"
        },
        {
            id: 2,
            title: "IELTS Simulation Reading Test 2",
            description: "Thời gian làm bài: 60 phút | 3 đoạn văn | 40 câu hỏi",
            duration: "60 phút",
            status: "Sẵn sàng"
        },
        {
            id: 3,
            title: "IELTS Simulation Reading Test 3",
            description: "Thời gian làm bài: 60 phút | 5 đoạn văn | 40 câu hỏi",
            duration: "60 phút",
            status: "Chua sẵn sàng"
        },
    ],

    // 2. Danh mục Flashcards (Chọn chủ đề)
    flashcardCategories: [
        {
            id: "cat1",
            title: "Từ vựng về văn phòng",
            description: "Các từ vựng phổ biến trong môi trường công sở.",
            image: "office_icon.png"
        },
        {
            id: "cat2",
            title: "Từ vựng về đồ vật",
            description: "Tên gọi các vật dụng quen thuộc hàng ngày.",
            image: "objects_icon.png"
        },
        {
            id: "cat3",
            title: "Từ vựng về con vật",
            description: "Khám phá thế giới động vật đa dạng.",
            image: "animals_icon.png"
        }
    ],

    // 3. Chi tiết Flashcards (Mặt trước/Mặt sau)
    flashcards: [
        {
            id: "fc1",
            categoryId: "cat2",
            word: "tomato",
            phonetic: "/təˈmeɪ.toʊ/",
            type: "noun",
            audio: "tomato_audio.mp3",
            definition: "(Quả) cà chua",
            example: "I eat a tomato every day."
        },
        {
            id: "fc2",
            categoryId: "cat1",
            word: "computer",
            phonetic: "/kəmˈpjuː.tər/",
            type: "noun",
            audio: "computer_audio.mp3",
            definition: "Máy tính",
            example: "I work on my computer."
        }
    ],

    // 4. Grid Từ vựng (Vocabulary Grid)
    vocabularyGrid: [
        { id: 1, word: "Education", meaning: "Giáo dục", level: "B1" },
        { id: 2, word: "Technology", meaning: "Công nghệ", level: "B2" },
        { id: 3, word: "Environment", meaning: "Môi trường", level: "B1" },
        { id: 4, word: "Economy", meaning: "Kinh tế", level: "C1" },
        { id: 5, word: "Culture", meaning: "Văn hóa", level: "A2" },
        { id: 6, word: "Health", meaning: "Sức khỏe", level: "A1" }
    ],

    // 5. Câu hỏi luyện tập (Practice Questions)
    practiceQuestions: [
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
        {
            id: 1,
            question: "She ____ to school every day.",
            options: [
                { label: "A", text: "go" },
                { label: "B", text: "goes" },
                { label: "C", text: "going" },
                { label: "D", text: "gone" },
            ],
            correctAnswer: "B"
        },
    ],

    // 6. Quản lý người dùng (Dành cho phần Admin trong ảnh)
    users: [
        { id: 1, name: "Admin User", role: "Admin", avatar: "admin_url" },
        { id: 2, name: "Student A", role: "User", avatar: "user_url" }
    ]
};
