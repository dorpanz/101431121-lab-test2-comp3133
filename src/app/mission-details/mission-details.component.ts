
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../services/spacex.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-mission-details',
  standalone: true,
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css'],
  imports: [CommonModule] 
})
export class MissionDetailsComponent implements OnInit {
  mission: any = null;
  private route = inject(ActivatedRoute);
  private spaceXService = inject(SpaceXService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spaceXService.getMissionById(id).subscribe((data) => {
        this.mission = data; 
      });
    }
  }
}
