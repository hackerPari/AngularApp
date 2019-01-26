import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chapterFilter'
})
export class ChapterFilterPipe implements PipeTransform {

  transform(chapters: any, filter?: any): any {
    console.log(chapters, filter);

    if (filter.length > 0) {
      const filteredChapters = [];

      chapters.forEach(chapter => {
        if (chapter.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
          filteredChapters.push(chapter);
        } else {

          const filteredTopics = [];
          const filteredChapter = JSON.parse(JSON.stringify(chapter));

          chapter.topics.forEach(topic => {
            if (topic.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
              filteredTopics.push(topic);
            }
          });

          if (filteredTopics.length > 0) {
            filteredChapter.topics = filteredTopics;
            filteredChapters.push(filteredChapter);
          }

        }
      });

      return filteredChapters;
    }

    return chapters;
  }

}
