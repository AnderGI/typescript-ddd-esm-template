import { CourseCreator } from '../../../../../src/contexts/mooc/courses/application/CourseCreator';
import { Course } from '../../../../../src/contexts/mooc/courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
	repository = new CourseRepositoryMock();
	creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
	it('should create a valid course', async () => {
		const id = 'some-id';
		const name = 'some-name';
		const duration = 'some-duration';

		const course = new Course({ id, name, duration });

		await creator.run(id, name, duration);

		repository.assertLastSavedCourseIs(course);
	});
});
