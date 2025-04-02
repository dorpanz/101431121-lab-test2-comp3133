import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpaceXService } from '../services/spacex.service';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css'],
  imports: [CommonModule, MatCardModule, RouterModule, FormsModule], 
  providers: [SpaceXService] 
})
export class MissionListComponent implements OnInit {
  missions: any[] = [];
  filteredMissions: any[] = [];
  private spaceXService = inject(SpaceXService);

  // Filters
  launchYear: string = '';
  launchSuccess: string = '';
  landSuccess: string = '';

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    this.spaceXService.getAllMissions().subscribe((data: any[]) => {
      this.missions = data;
      this.applyFilters(); // Apply filters when data loads
    });
  }

  applyFilters(): void {
    this.filteredMissions = this.missions.filter(mission => {
      return (
        (this.launchYear === '' || mission.launch_year === this.launchYear) &&
        (this.launchSuccess === '' || mission.launch_success?.toString() === this.launchSuccess) &&
        (this.landSuccess === '' || mission.rocket.first_stage.cores[0].land_success?.toString() === this.landSuccess)
      );
    });
  }

  resetFilters(): void {
    this.launchYear = '';
    this.launchSuccess = '';
    this.landSuccess = '';
    this.applyFilters();
  }
}
