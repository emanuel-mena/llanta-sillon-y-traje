import { useState } from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'

export type ContributorBadgeProps = {
  index: number
  linkedinUrl: string
  name: string
  role: string
  photoUrl?: string
}

function isLinkedInUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && (url.hostname === 'linkedin.com' || url.hostname.endsWith('.linkedin.com'))
  } catch {
    return false
  }
}

function getInitials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean)

  if (words.length === 0) {
    return 'C'
  }

  return words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? '').join('')
}

export function ContributorBadge({ index, linkedinUrl, name, role, photoUrl }: ContributorBadgeProps) {
  const displayName = name.trim() || 'Contribuyente'
  const [failedPhotoUrl, setFailedPhotoUrl] = useState<string | null>(null)
  const showPhoto = Boolean(photoUrl && failedPhotoUrl !== photoUrl)
  const initials = getInitials(displayName)
  const hasValidLinkedInUrl = isLinkedInUrl(linkedinUrl)

  const badgeContent = (
    <>
      <span className="contributor__number">{String(index + 1).padStart(2, '0')}</span>
      <span className="contributor__identity">
        <span className="contributor__avatar">
          {showPhoto && photoUrl ? (
            <img src={photoUrl} alt={`Foto de ${displayName}`} onError={() => setFailedPhotoUrl(photoUrl)} />
          ) : initials}
        </span>
        <span>
          <strong>{displayName}</strong>
          <small>{role}</small>
        </span>
      </span>
      <span className="linkedin" aria-hidden="true"><FaLinkedinIn /></span>
    </>
  )

  if (!hasValidLinkedInUrl) {
    return <div className="contributor contributor--disabled">{badgeContent}</div>
  }

  return (
    <a className="contributor" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={`Ver el perfil de LinkedIn de ${displayName}`}>
      {badgeContent}
    </a>
  )
}
