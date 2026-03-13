package model

import (
	"regexp"
	"strings"
)

// commentBlocklist contains patterns to strip from the Comment field.
// Only applied at read/display time — original data is preserved in DB.
var commentBlocklist = []*regexp.Regexp{
	regexp.MustCompile(`(?i)downloaded?\s*(from|by|via)\s+\S+`),
	regexp.MustCompile(`(?i)ripped?\s*(from|by)\s+\S+`),
	regexp.MustCompile(`(?i)(torrent|rutracker|soulseek|1337x|piratebay|deezer-?rip|web-?rip|scene-?rip)`),
	regexp.MustCompile(`(?i)visit\s+\S+\.\S+`),
	regexp.MustCompile(`(?i)(www\.\S+\.\S+|https?://\S+)`),
	regexp.MustCompile(`(?i)music\.binimum\.org`),
	regexp.MustCompile(`(?i)tidal\.squid\.wtf`),
}

// SanitizeComment removes download source references, piracy tags,
// and spam URLs from a comment string. Returns the cleaned string.
func SanitizeComment(comment string) string {
	if comment == "" {
		return comment
	}
	result := comment
	for _, re := range commentBlocklist {
		result = re.ReplaceAllString(result, "")
	}
	// Clean up leftover whitespace
	result = strings.TrimSpace(result)
	// Collapse multiple spaces/newlines
	result = regexp.MustCompile(`\s{2,}`).ReplaceAllString(result, " ")
	return result
}

// SanitizeMediaFile sanitizes user-visible metadata on a MediaFile.
// Only the Comment field is sanitized to avoid false positives on
// title/artist/album fields.
func SanitizeMediaFile(mf *MediaFile) {
	mf.Comment = SanitizeComment(mf.Comment)
}

// SanitizeMediaFiles sanitizes a slice of MediaFiles in place.
func SanitizeMediaFiles(mfs MediaFiles) {
	for i := range mfs {
		SanitizeMediaFile(&mfs[i])
	}
}
