import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chapterFilter'
})
export class ChapterFilterPipe implements PipeTransform {

  transform(chapters: any, filter?: any): any {
    console.log(chapters, filter);

    // only filter if search term is not empty string
    if (filter.length > 0) {

      // contains filtered chapters which will be returned
      const filteredChapters = [];

      chapters.forEach(chapter => {

        // search for the chapter name which matches with the search term
        if (chapter.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
          filteredChapters.push(chapter);
        } else { // try matching the topics of the chapter if chapter name doesn't match

          // contains filtered topics which we need to show
          const filteredTopics = [];

          // make a deep copy of the chapter object
          const filteredChapter = JSON.parse(JSON.stringify(chapter));

          chapter.topics.forEach(topic => {
            if (topic.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
              filteredTopics.push(topic);
            }
          });


          // only if at least one topic matches the search term, we add the chapter to the filteredChapters
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
