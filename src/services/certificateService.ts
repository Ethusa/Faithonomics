import type { ClassroomRepository } from "../adapters/classroomRepository";
import { assertOwnLearnerRecord } from "../domain/permissions";
import { calculateCompletionPercent } from "../domain/progress";
import type { Certificate, Enrolment, LearnerIdentity } from "../domain/types";

export class CertificateService {
  constructor(private readonly repository: ClassroomRepository) {}

  async issueIfComplete(identity: LearnerIdentity, enrolment: Enrolment): Promise<Certificate | null> {
    assertOwnLearnerRecord(identity, enrolment.memberId);
    const lessons = await this.repository.listLessons(enrolment.courseId);
    const progress = await this.repository.listProgress(enrolment.id);
    if (calculateCompletionPercent(lessons, progress, enrolment.id) < 100) {
      return null;
    }
    const certificate: Certificate = {
      id: `cert-${enrolment.id}`,
      courseId: enrolment.courseId,
      enrolmentId: enrolment.id,
      memberId: enrolment.memberId,
      certificateNumber: `CERT-${enrolment.id.toUpperCase()}`,
      issuedAt: new Date().toISOString(),
      verificationUrl: `${import.meta.env.VITE_STUDENT_PORTAL_URL ?? ""}/certificates/${enrolment.id}`,
    };
    return this.repository.saveCertificate(certificate);
  }
}
