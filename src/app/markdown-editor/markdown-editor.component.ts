import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-editor',
  standalone: true,
  imports: [],
  templateUrl: './markdown-editor.component.html',
  styleUrl: './markdown-editor.component.css',
})
export class MarkdownEditorComponent {
  dataPath = '../../assets/data.json';
  http = inject(HttpClient);
  currentContent = ``;

  ngOnInit() {
    this.http.get<any>(this.dataPath).subscribe((data) => {
      this.currentContent = data[1].content;
    });
  }
}
