export const dummyFiles = [
    {
        id: '1',
        label: '학생1.cpp',
        submittedAt: '2025-03-29 17:10',
        content: [
            'int main() {',
            '  int a = 10;',
            '  int b = 20;',
            '  int sum = a + b;',
            '  cout << sum << endl;',
            '}',
        ],
        similarMap: {
            2: ['학생2.cpp'],
            3: ['학생2.cpp'],
            4: ['학생3.cpp'],
            5: [],
            6: [],
            7: [],
        },
    },
    {
        id: '2',
        label: '학생2.cpp',
        submittedAt: '2025-03-29 17:11',
        content: [
            'int main() {',
            '  int x = 10;',
            '  int y = 20;',
            '  int result = x + y;',
            '  cout << result << endl;',
            '}',
        ],
        similarMap: {
            2: ['학생1.cpp'],
            3: ['학생1.cpp'],
            4: ['학생3.cpp'],
            5: [],
            6: [],
            7: [],
        },
    },
    {
        id: '3',
        label: '학생3.cpp',
        submittedAt: '2025-03-29 17:12',
        content: [
            '#include <iostream>',
            'using namespace std;',
            '',
            'int main() {',
            '  int num1 = 10;',
            '  int num2 = 20;',
            '  int total = num1 + num2;',
            '  cout << total << endl;',
            '  return 0;',
            '}',
        ],
        similarMap: {
            2: [],
            3: [],
            4: [],
            5: ['학생1.cpp', '학생2.cpp'],
            6: ['학생1.cpp', '학생2.cpp'],
            7: ['학생1.cpp'],
        },
    },
];
